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
            w="80%"
            justifyContent="space-between"
            alignItems="center"
            border="1px"
            borderColor="gray.200"
            p="2"
            ps={['2', '2', '8', '8']}
            pe={['2', '2', '8', '8']}
            bg={props.todo.status === false ? 'red.200' : 'green.200'}
            borderRadius="lg"
            fontSize={['1.5vh', '1.5vh', '1,5vw', '1.5vw']}
        >
            <Box
                w="100%"
                textTransform="capitalize"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text>{props.index}. </Text>
                <Text>{props.todo.text}</Text>
                <Text>{props.todo.date}</Text>
                <Button
                    fontSize={['1.5vh', '1.5vh', '1,5vw', '1.5vw']}
                    h="fit-content"
                    w="fit-content"
                    p={['1', '1', '3', '3']}
                    bg="blue.300"
                    _hover={{
                        bg: 'blue.100',
                    }}
                    onClick={() => {
                        props.toggle(props.todo);
                    }}
                >
                    Check
                </Button>
            </Box>
        </Box>
    );
};
