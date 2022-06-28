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
            if (x === target) {
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
                w="100%"
                minW="100vh"
                textAlign="center"
                fontSize="xl"
                display="flex"
                justifyContent="center"
            >
                <Box mt="10">
                    <Heading>Todo List App</Heading>
                    <VStack w="100%" align="self-start" mt="16">
                        {todo.map((x, i) => (
                            <TodoList
                                key={i}
                                toggle={toggleStatus}
                                index={i + 1}
                                todo={todo[i]}
                            />
                        ))}
                        <HStack w="100%" pt="5">
                            <Input
                                w="100%"
                                placeholder="new todo"
                                onChange={(e) => setNewText(e.target.value)}
                            />
                            <Button
                                onClick={() => {
                                    addTodos();
                                    console.log(todo);
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
