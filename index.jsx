const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент
const root = ReactDOM.createRoot(rootNode);


// компоненты
function Hello(props) {
    props.name = "ZZZ";
    var s =
<div style={{color:'red', fontFamily:'Verdana'}}>
    <p>Имя: {props.name}</p>
    <p>Возраст: {props.age}</p>
</div>;
    return s;
}
Hello.defaultProps = {name: "Mik", age: 22};

// ----------------------------------------------
function ClickButton(props) {

    function press(e){
        console.log(e); // выводим информацию о событии
        alert("Hello React!")
    }
    return <button onClick={press}>Click</button>;
}

// рендеринг в корневой элемент
root.render(
    <Hello age="54" />
);

root.render(
    <div id="items">
        <Hello age="54" />
        <ClickButton />
    </div>
);