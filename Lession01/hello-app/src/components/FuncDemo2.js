function Avatar(props){
    return(
        <div>
            <img src={props.link} alt=""/>
        </div>
    )
};

function MemberInfo(props){
    return(
        <div className="info">
            <Avatar link= {props.info.path}/>
            <h2>{props.info.name}</h2>
            <p>Tuổi: {PushSubscriptionOptions.info.age}</p>
        </div>
    )
};

const member= {
    path :"/avatar.jpg",
    name: "Dam Luan",
    age: 27
};
ReactDOM.render(
    <MemberInfo info = {member}/>,
    document.getElementById('root')
);