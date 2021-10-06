export function customFetchLogin({ username, password }) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return new Promise((resolve) => {
    fetch("https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        username,
        password,
      }),
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
        }

        return response.json();
      })
      .then((data) => resolve(data));
  });
}

export function customFetchProfile(token) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("authorization", token);

  return new Promise((resolve) => {
    fetch("https://java.bocetos.co/userred-0.0.1-SNAPSHOT/myprofile", {
      method: "GET",
      headers: myHeaders,

      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          return { codeStatus: response.status };
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data));
  });
}

export function getFiguresAll(token) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("authorization", token);
  return new Promise((resolve) => {
    fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure", {
      method: "GET",
      headers: myHeaders,

      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
          return { codeStatus: response.status };
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data));
  });
}

export function getFiguresGroupsAll(token) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("authorization", token);
  return new Promise((resolve) => {
    fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure", {
      method: "GET",
      headers: myHeaders,

      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
          return { codeStatus: response.status };
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data));
  });
}

export function saveFigure({ token, name, idgroup, positions }) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("authorization", token);
  return new Promise((resolve) => {
    fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        figureName: name,
        idFigureGroup: idgroup,
        positions: positions,
      }),
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
          return { codeStatus: response.status };
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data));
  });
}
