export default function TodoFilter() {

  return (
    <div className="list__setting">
      <label className="list__setting-label">
        <input
            type="checkbox"
            className="list__setting-input js-show-completed"
        />
        完了タスクを表示
      </label>
    </div>
  );
}