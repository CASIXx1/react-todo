export default function TodoForm() {
  return (
    <form className="form js-form">
      <div className="form__input-group">
        <div className="form__input form__input--name">
          <label className="form__input-label" htmlFor="name">
            タスク
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form__input-field"
            placeholder="タスク名を入力"
          />
        </div>

        <div className="form__input">
          <label className="form__input-label" htmlFor="deadline">
            期限日
          </label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            className="form__input-field"
            placeholder="期限日を入力"
          />
        </div>
      </div>

      <div className="form__input-footer">
        <button type="submit" className="button button--primary">
          追加
        </button>
      </div>
    </form>
  );
}