
export default function Student(props){
    return(
    props.studentDetails.map( mapVar =>(
        <div>
        <div>{mapVar.id}</div>
        <div>{mapVar.name}</div>
        </div>
    )))
}