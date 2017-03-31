import React from 'react';
import uuid from 'uuid';
import style from './App.scss';
import Title from '../components/Title.jsx';
import ToDoList from '../components/ToDoList.jsx';
import ToDoForm from '../components/ToDoForm.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 1,
                    text: 'clean room'
                },
                {
                    id: 2,
                    text: 'wash the dishes'
                },
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        }
    }

    addToDo = (val) => {
        const todo = {
            text: val,
            id: uuid.v4()
        }
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeToDo = (id) => {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.ToDoApp}>
                <Title title={'No of items'} listLength={this.state.data.length} />
                <ToDoForm addToDo={this.addToDo}/>
                <ToDoList data={this.state.data} removeToDo={this.removeToDo} />
            </div>
        )
    }
}

export default App;