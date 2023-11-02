export default {
  async paths() {
    // it's ok, since test.json is in docs/public
    // const posts = await (await fetch("http://localhost:5173/test.json")).json();

    // from http-server, not ok
    // const posts2 = await (
    //   await fetch("http://127.0.0.1:8080/test.json")
    // ).json();

    const posts = [{ id: 1, content: 1234 }];

    return posts.map((post) => {
      return {
        params: { id: post.id, pkg: "foo" },
        content: post.content, // raw Markdown or HTML
      };
    });
  },
};
