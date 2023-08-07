import Feed from "@components/Feed";

export const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br  />
            <span className="blue_gradient text-center">AI powered Prompt</span>
        </h1>
        <p className="desc text-center">
            Magical prompt-share platform ✨
        </p>

        <Feed />
    </section>
  )
}

export default Home;
