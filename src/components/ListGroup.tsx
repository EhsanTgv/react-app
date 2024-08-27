function ListGroup() {
    const items = [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
    ];

    return (
        <>
            <h1>List</h1>
            {items.length==0&&"No item founded"}
            <ul className="list-group">
                {
                    items.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default ListGroup;