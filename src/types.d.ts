// todo state'ti api'den gelen veriler icin state'in type'na objeler icin veri tanimlamasini yapmak icin interface kullaniyoruz
interface ITodoType{
    task: string,
    isDone: boolean
    id: string | number
    todo?:string
    category: 'business' | 'personal';
}

type AddFn = (task:string, category:string) => Promise<void>;
type ToggleFn = (todo:ITodoType) => Promise<void>;
type DeleteFn = (id:number | string) => Promise<void>;
type EditFn = (todo:ITodoType) => Promise<void>;

interface ITodoListFn{
    deleteTodo:DeleteFn;
    toggleTodo:ToggleFn
    editTodo:EditFn
}


