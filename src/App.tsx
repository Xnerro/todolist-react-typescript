import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    theme,
    Heading,
    VStack,
    Input,
    Button,
    HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { TodoList } from './componet/todoList';

const todos: Todo[] = [
    {
        text: 'learning typescript',
        status: true,
        date: new Date().toTimeString(),
    },
    {
        text: 'learning pydantic',
        status: false,
        date: new Date().toTimeString(),
    },
];

export const App = () => {
    const [todo, setTodo] = useState(todos);
    const [newText, setNewText] = useState(String);

    const toggleStatus = (target: Todo) => {
        const newTodo = todo.map((x) => {
            if (x === target && x.status !== true) {
                return {
                    ...x,
                    status: !x.status,
                };
            }
            return x;
        });
        setTodo(newTodo);
    };

    const addTodos = () => {
        const newTodo: Todo = {
            text: newText,
            status: false,
            date: new Date().toTimeString(),
        };
        setTodo(todo.concat(newTodo));
    };

    return (
        <ChakraProvider theme={theme}>
            <Box
                maxW="100%"
                textAlign="center"
                fontSize="xl"
                display="flex"
                justifyContent="center"
                minH="100vh"
            >
                <Box
                    mt="10"
                    w="100%"
                    display="flex"
                    alignItems="center"
                    flexDir="column"
                >
                    <Heading>Todo List App</Heading>
                    <VStack
                        align="self-start"
                        mt="16"
                        alignItems="center"
                        w="100%"
                    >
                        {todo.map((x, i) => (
                            <TodoList
                                key={i}
                                toggle={toggleStatus}
                                index={i + 1}
                                todo={todo[i]}
                            />
                        ))}
                        <HStack w="80%" pt="5" display="flex">
                            <Input
                                w="100%"
                                placeholder="new todo"
                                onChange={(e) => setNewText(e.target.value)}
                                fontSize={['1.5vh', '1.5vh', '1,5vw', '1.5vw']}
                                h={['4vh', '4vh', '3vw', '3vw']}
                            />
                            <Button
                                fontSize={['1.5vh', '1.5vh', '1,5vw', '1.5vw']}
                                h={['4vh', '4vh', '3vw', '3vw']}
                                onClick={() => {
                                    addTodos();
                                }}
                            >
                                Add
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
                <ColorModeSwitcher position="absolute" right="0%" />
            </Box>
        </ChakraProvider>
    );
};
