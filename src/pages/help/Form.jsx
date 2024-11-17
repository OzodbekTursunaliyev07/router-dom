function Form() {
  return (
    <>
      <h1>Send us questions</h1>
      <hr />
      <div className="form-container">
        <form >
            <label className="form-control">
                <span>Your email</span>
                <input type="text" />
            </label>
            <label className="form-control">
                <span>Your message</span>
                <textarea></textarea>
            </label>
            <button className="button">Send</button>
        </form>
      </div>
    </>
  );
}

export default Form;
