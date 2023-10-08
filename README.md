# Dummy Lab System

A simple Node.js and Express application that provides basic functionality for managing lab orders. Users can submit lab orders via a REST endpoint, and view a list of submitted orders in a clean and modern UI.

## Features

- Submit a new lab order via a REST API.
- View a list of all submitted lab orders in a web UI.

## Installation & Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/tmvumbi/dummy-lab-system.git
    cd dummy-lab-system
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    node server.js
    ```

After running the application, you can open your web browser and navigate to `http://localhost:7001` to see the list of lab orders.

## Usage

### Submitting a Lab Order

To submit a new lab order, send a POST request to `http://localhost:7001/submit-order` with a JSON body containing the lab order details. For example:

```json
{
    "name": "John Doe",
    "testType": "Blood Test"
}
```

### Viewing Lab Orders

Open your web browser and go to `http://localhost:7001` to see a list of all submitted lab orders.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **View Engine**: EJS

## Contributions

Pull requests are welcome! For major changes, please open an issue first to discuss the proposed change.

## License

This project is licensed under the [Apache License, Version 2.0](LICENSE).