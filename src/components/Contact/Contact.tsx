export const Contact = () => {
  return (
    <>
      <h1>お問い合わせフォーム</h1>
      <p>全てのフィールドは必須項目です。</p>
      <form action="">
        <div>
          <label htmlFor='name'>お名前</label>
          <input type='text' id='name' />
          <label htmlFor='email'>メールアドレス</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='questions'>お問い合わせ内容</label>
          <select id='questions'>
            <option value=''>お問い合わせ内容を選択して下さい。</option>
            <option value='dev'>開発案件の相談</option>
            <option value='life'>人生の相談</option>
            <option value='human'>人間関係のもつれ</option>
            <option value='friend'>友達がいない</option>
          </select>
        </div>
        <div>
          <label>
            <input type='checkbox' id='terms' />
            利用規約に同意
          </label>
        </div>
        <button>送信</button>
      </form>
    </>
  )
}
