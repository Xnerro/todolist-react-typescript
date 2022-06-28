interface Todo {
    text: string;
    status: boolean;
    date: string;
}

type Toggle = (target: Todo) => void;
