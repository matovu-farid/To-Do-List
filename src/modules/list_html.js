export const listHtml = (item)=>{

    
    return (item.completed)? `
        <label >
            <input type="checkbox" name="x" checked>
            ${item.description}
        </label>
        <i class="fas fa-ellipsis-v icon"></i>
    `:`
    <label >
        <input type="checkbox" name="x" >
        ${item.description}
    </label>
    <i class="fas fa-ellipsis-v icon"></i>
`;
}