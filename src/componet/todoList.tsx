import { Box, Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
    index: number;
    todo: Todo;
    toggle: Toggle;
}

export const TodoList: React.FC<Props> = (props) => {
    return (
        <Box
            display="flex"
            w="110%"
            justifyContent="space-between"
            alignItems="center"
            border="1px"
            borderColor="gray.200"
            p="2"
            ps="10"
            pe="10"
            bg={props.todo.status === false ? 'red.200' : 'green.200'}
            borderRadius="lg"
        >
            <HStack w="100%" textTransform="capitalize">
                <Text>{props.index}. </Text>
                <Text>{props.todo.text}</Text>
            </HStack>
            <Text>{props.todo.date}</Text>

            <Button
                bg="blue.300"
                _hover={{
                    bg: 'blue.100',
                }}
                onClick={() => {
                    props.toggle(props.todo);
                    console.log(props.todo);
                }}
            >
                Check
            </Button>
        </Box>
    );
};
