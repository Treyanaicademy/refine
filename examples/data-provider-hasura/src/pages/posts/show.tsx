import { useShow, IResourceComponentsProps } from "@refinedev/core";

import { Show, MarkdownField, RefreshButton } from "@refinedev/antd";

import { Typography } from "antd";

import { IPost } from "../../interfaces";
import { GET_POST_QUERY } from "./queries";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow<IPost>({
        meta: {
            gqlQuery: GET_POST_QUERY,
        },
    });

    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show
            isLoading={isLoading}
            headerProps={{
                extra: (
                    <RefreshButton
                        onClick={() => {
                            queryResult.refetch();
                        }}
                    />
                ),
            }}
        >
            <Title level={5}>Id</Title>
            <Text>{record?.id}</Text>

            <Title level={5}>Title</Title>
            <Text>{record?.title}</Text>

            <Title level={5}>Category</Title>
            <Text>{record?.category.title}</Text>

            <Title level={5}>Content</Title>
            <MarkdownField value={record?.content} />
        </Show>
    );
};
