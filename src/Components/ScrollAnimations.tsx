import { useScroll } from "motion/react";

const ScrollAnimations = () => {
    const {scrollYProgress} = useScroll()

  return (
    <>
 
      <div className="w-full h-full text-center bg-pink-500 px-80 py-20">
        <h2 className="text-4xl font-bold m-5 font-mono">Random Text</h2>
        <p className="font-normal text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          omnis perspiciatis optio doloribus odio assumenda, consequatur vel
          cumque modi earum quibusdam nam amet fuga? Repellat molestiae odit
          accusantium eveniet ad voluptatem rem consequuntur vel eum. Eligendi
          repudiandae dolorem tempora porro, velit dicta accusamus, id excepturi
          doloremque quos voluptate necessitatibus a ratione distinctio
          voluptatum deleniti saepe? Iusto iste fugit distinctio numquam ea
          harum autem est sed, dolor totam atque eius quidem ab incidunt commodi
          pariatur perspiciatis quae ad mollitia. Laboriosam, dolore. Enim nemo
          animi quis autem consectetur numquam unde quibusdam rerum! Laboriosam
          nulla minima, facere ratione accusamus incidunt sint autem veniam?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit esse
          mollitia illum veniam? Ut, officiis porro! Similique, cumque facilis a
          tempore aspernatur minima sunt error iste, nam eligendi architecto
          itaque repellendus deleniti ducimus praesentium adipisci quasi
          molestiae. Corrupti, tenetur. Necessitatibus maiores ut, aspernatur
          quae unde non dolorem fuga debitis autem velit ea porro officiis
          doloribus natus? Corrupti praesentium aliquam explicabo, blanditiis
          sapiente numquam nobis error cumque deserunt ratione iusto in quasi
          voluptates qui nihil unde laudantium necessitatibus natus! Corporis,
          iure provident fugiat suscipit quos impedit magnam, ducimus nemo esse
          architecto, velit facilis? Tempora consectetur nam modi voluptatum
          beatae? Amet, pariatur.
        </p>
      </div>
    </>
  );
};

export default ScrollAnimations;
