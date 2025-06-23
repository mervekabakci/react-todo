import { useEffect, useState } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo';
import Todo from './Components/Todo';
import ThemeSwitch from './Components/ThemeSwitch';

function App() {
  const storedDarkMode = JSON.parse(localStorage.getItem('isDark'));
  const [isDark, setIsDark] = useState(storedDarkMode === null ? false : storedDarkMode);

  const storedItems = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(storedItems !== null ? storedItems : []);
  const [inputValue, setInputValue] = useState('');


  const storeChecked = JSON.parse(localStorage.getItem('isChecked'));
  const [isChecked, setIsChecked] = useState(storeChecked || []);

  
  useEffect(() => {
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
    console.log("isChecked:" + isChecked);
  }, [isChecked]);

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
    if(isDark === true){
      document.querySelector("body").classList.add("darkMode");
    }
    else{
      document.querySelector("body").classList.remove("darkMode");
    }
    console.log("isDark:" + isDark);
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("stored todos:" + storedItems);
  }, [todos]);
    
  return (
    <div className='mainBox'>
      <h1>Yapılacaklar Listesi</h1>
      <ThemeSwitch themeMode = {isDark} themeSetMode = {setIsDark} />

      {/* add todo list beginner */}
        {/* 
          burada value degerıne degıskenımızı atıyoruz. 
          onchange işleminde ise useState tuttugumuz setInputValue degerıne arrow functıon ıle ınput un value degerını atıyoruz.(Bu işlemi yapmazsak input a verı gırısı yapılamıyor. onChange gırılmez ıse console da bunun ıle ılgılı hata cıkıyor zaten.)
        */}
        {/* <input type="text" name="tod" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Todo Giriniz" />
        <button onClick={addTodo}>Ekle</button> */}
        {/* ekle butonumuzun onclik eventıne addTodo fonksıyonunu atıyoruz */}


      <AddTodo 
        todos={todos} 
        todosSet = {setTodos}
        inputVal ={inputValue}
        inputSetVal = {setInputValue}
      />

      <Todo 
        todos={todos} 
        todosSet = {setTodos} 
        isChecked={isChecked}
        setIsChecked={setIsChecked} 
      />

      {/* <ul id='todoList'>
        {
          // burada for yerıne todos larımızı map ile <li> </li> içerisinde tekte yazdırıyoruz.
          // her todo <li></li> eklendiginde içerisine bir de delete butonu eklıyoruz
          //Delete butonunun sılme ıslemını map yaparken aldıgımız index degerınden yakalıyoruz
          todos.map((todo, index) => (
            <TodoItem 
              key={index} 
              todo={todo} 
              onDelete={() => onDelete(index)} 
            />

            // <li key={index}>
            //   {todo}
            //   <button onClick={() => onDelete(index)}>DELETE</button>
            // </li>
          )
        )} 
      </ul> */}
      
      {/* add todo list finally */}
    </div>
  )
}

export default App
