import AppName from "./components/AppName";

function App() {
  return (
    <>
      <center class="todo-container">
        <AppName />
        <div class="container text-center">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter Todo here" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">
                Add
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-6">Buy Milk</div>
            <div class="col-4">4/03/2024</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-6">Gym</div>
            <div class="col-4">5/03/2024</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
