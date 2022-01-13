export default class LocalStorageManager {
    save=(listCollection) => {
      const stringObject = JSON.stringify(listCollection);
      window.localStorage.setItem('lists', stringObject);
    }

    retrieve=() => {
      const serializedObject = window.localStorage.getItem('lists');
      const array = JSON.parse(serializedObject) || [];
      return array;
    }
}
export const storage = new LocalStorageManager();