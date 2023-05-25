class IdUtil {
    public static ID_KEY: string = 'ID_KEY';

    public static generateId(): string {
        return Math.random().toString(36).substring(2, 10);
    }

    public static getId(): string {
        let item = localStorage.getItem(this.ID_KEY);
        if (!item) {
            item = `${IdUtil.generateId()}-${IdUtil.generateId()}-${IdUtil.generateId()}-${IdUtil.generateId()}`;
            localStorage.setItem(this.ID_KEY, item);
            return item;
        }
        return item;
    }
}

export default IdUtil;
