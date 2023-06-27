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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores commodi fuga veniam magni quam quas architecto, sed nisi possimus dicta ullam enim quia, excepturi eligendi, ea soluta optio hic nemo qui aperiam natus similique repudiandae iusto. Velit unde dolores eum.
        </p>

        <Feed />
    </section>
  )
}

export default Home;