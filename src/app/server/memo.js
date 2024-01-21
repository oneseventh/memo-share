
"use server";

import client from "@/lib/prisma";

export const createMemo = async (title, content) => {

    if (!(title.length >= 2) || !(content.length >= 4)) {
        return { memo: null, id: null, isError: 422};
    }

    try {
        const createdMemo = await client.memos.create({
            data: {
                title,
                content,
            },
        });

        // 생성된 Todo의 ID 가져오기
        const createdMemoId = createdMemo.id;

        console.log(createdMemoId)

        return { memo: createdMemo, id: createdMemoId, isError: null };
    } catch (error) {
        console.error("Error creating todo:", error);
        return { memo: null, id: null, isError: 500};
    }
};

export const getMemoById = async (memoId) => {
    try {
        // 추가: memoId 값이 유효한 정수인지 확인
        if (typeof memoId !== 'number' || memoId <= 0) {
            return { memo: null, isError: 400 };
        }

        const memo = await client.memos.findUnique({
            where: {
                id: memoId,
            },
        });

        if (!memo) {
            return { memo: null, isError: 404 };
        }

        return { memo: memo, isError: null };
    } catch (error) {
        console.error("Error fetching memo by ID:", error);
        return { memo: null, isError: 500 };
    }
};