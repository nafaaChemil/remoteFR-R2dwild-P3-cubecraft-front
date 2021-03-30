const send = event => {
  console.log('hey')
}

export default function TestUpload() {
  return (
    <div className='container'>
      <div className='row'>
        <form>
          <h3>React File Upload</h3>
          <div className='form-group'>
            <label htmlFor='file'>File</label>
            <input type='file' id='file' />
            <button onClick={send}></button>
          </div>
        </form>
      </div>
    </div>
  )
}