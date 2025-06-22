import { Component, useState } from "react";

export default class AddTodo extends Component{
    render(){
        const addTodo = () =>
        {
          if(this.props.inputVal.trim()!=='')
          {
            //... spread operatoru todos dizisini alır ve tüm elemanlarını tek tek açar, sonuna da inputValue degerını ekler.
            //Burada ekstradan todos=[] gibi yeni bir dizi tanımlamaya gerek kalamdan bu operator ile işlemimizi yapabılıyoruz.
            this.props.todosSet([...this.props.todos, this.props.inputVal]);
            this.props.inputSetVal('');
          }
        }
        return(
            <>
              <div className="addTodoBox">
                <input type="text" name="tod" value={this.props.inputVal} onChange={e => this.props.inputSetVal(e.target.value)} placeholder="Todo Giriniz" />
                <button className="btnFix" onClick={addTodo}><span>Ekle</span><span className="icon">+</span></button>
              </div>
            </>
        )
    }
}