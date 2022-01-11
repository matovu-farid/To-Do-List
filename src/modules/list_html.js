export const checkedItem = (item) => `
<label >
            <input type="checkbox" name="x" checked>
            ${item.description}
        </label>
        <i class="fas fa-ellipsis-v icon"></i>
`;
export const uncheckedItem = (item) => `
<label >
            <input type="checkbox" name="x" >
            ${item.description}
        </label>
        <i class="fas fa-ellipsis-v icon"></i>
`;
export const listHtml = (item) => ((item.completed)
  ? checkedItem(item) : uncheckedItem(item));
