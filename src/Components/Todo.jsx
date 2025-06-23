import { Component } from "react"
import TodoItem from "./TodoItem"

export default class Todo extends Component{
    render() {
        const handleCheckboxChange = (index, checked) => {
            const updatedChecks = [...(this.props.isChecked || [])];
            updatedChecks[index] = checked;
            this.props.setIsChecked(updatedChecks);
        }
        const onDelete = (index) => {
            //Burada filtreleme yaparken 2 arguman alınır. filter(item, i) seklinde 
            //_ burada eleman kullanılmıyor demek için kullanılan bir yer tutucudur. Kullanılmayan parametre için "_" yer tutucudur.
            // _ yer tutucu kullanımayabılır de bu sadece gorsel bır kullanımdır. sadece i yazınca da kodumuz calısır.
            //burada delete işleminden sonra tüm todoları tekrar getirir
            const newTodos = this.props.todos.filter((_, i) => i !== index);
            const newChecked = (this.props.isChecked || []).filter((_, i) => i !== index);
            this.props.todosSet(newTodos);
            this.props.setIsChecked(newChecked);
        }
        return(
            <div className="todoList" id='todoList'>
                {/* <p>"Harikasın! Yapılacak iş kalmamış gibi görünüyor.
                    <br />
                    Yeni hedefler eklemeye hazır mısın? </p> */}
                {
                    // burada for yerıne todos larımızı map ile <li> </li> içerisinde tekte yazdırıyoruz.
                    // her todo <li></li> eklendiginde içerisine bir de delete butonu eklıyoruz
                    //Delete butonunun sılme ıslemını map yaparken aldıgımız index degerınden yakalıyoruz
                    (this.props.todos || []).map((todo, index) => (
                        <TodoItem 
                            key={index} 
                            todo={todo} 
                            onDelete={() => onDelete(index)} 
                            approved={(checked) => handleCheckboxChange(index, checked)} 
                            checked={this.props.isChecked ? this.props.isChecked[index] : false}
                        />
        
                    // <li key={index}>
                    //   {todo}
                    //   <button onClick={() => onDelete(index)}>DELETE</button>
                    // </li>
                    )
                )} 
            </div>
        )
    }
}