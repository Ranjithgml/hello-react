const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "header Tag"), React.createElement("h2", {}, "header Tag")]
    ),

    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "header Tag"), React.createElement("h2", {}, "header Tag")]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);