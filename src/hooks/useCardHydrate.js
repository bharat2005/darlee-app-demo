import { useQuery } from "@tanstack/react-query";
import { db } from "../services/firebase/firebaseConfig";

const data1 = {
  description:
    "Explore how estrogen and cortisol changes might influence tightness in the neck and shoulder area.",
  docId: "OLIxJpkqPWzdMOhtF90o",
  stepsData: [
    {
      boxImage:
        require('../../assets/images/data1Box1.png'),
      primaryText: "Increase blood flow to your brain, and wake you up",
      time: 5,
    },
    {
      boxImage:
        require('../../assets/images/data1Box2.png'),
      primaryText: "Delivers oxygen to your brain and improves concentration",
      secondaryText:
        'When blood flow to the brain is poor, the supply of oxygen dicreases, and the brain decideds that it needs to rest. As a result, you may not be able to concentrate or feel sleepy during the day. By relaxing the area just below the "mastoid process" behind your ears, you can increase blood flow to the brain.',
    },
    {
      boxImage:
        require('../../assets/images/data1Box3.png'),
      primaryText: "Rest your elbows on the desk",
      secondaryText:
        "Sit on a chair, rest your right elbow on the desk, and bring your right hand next to your left ear.",
      step: 1,
    },
    {
      boxImage:
        require('../../assets/images/data1Box4.png'),
      primaryText: "Press below the mastoid process",
      secondaryText:
        "Press the area jsut below your ear (mastoid process) with your index and middle fingers, and tilt your head to the side, resting the weight of your head on your fingers,",
      step: 2,
    },
    {
      boxImage:
        require('../../assets/images/data1Box5.png'),
      primaryText: "Take a deep breath",
      secondaryText:
        "Take three deep breaths in this position, then repeat on the left side. If you are feeling sleepy and unable to concentrate, try doing this about once every 30 minutes.",
      step: 3,
    },
  ],
};
const data2 = {
  description:
    "Build a small collection of sensory items—like textures, scents, or sounds—to help soothe emotional overload.",
  docId: "xpUdCC0j8Akm2JOPltWg",
  stepsData: [
    {
      boxImage:
        require('../../assets/images/data2Box1.png'),
      primaryText: "The surprising mechanism of female hormone secretion",
    },
    {
      boxImage:
        require('../../assets/images/data2Box2.png'),
      primaryText: "How female hormones are secreted",
      secondaryText:
        "There are two types of female hormones: estrogen and progesterone. The cerebrum sends commands to the hypothalamus, pitutary gland, and ovaries, which secrete hormones in accordane with the mensrual cycle.",
    },
    {
      boxImage:
        require('../../assets/images/data2Box3.png'),
      primaryText: "From the hypothalamus to the pituitary gland",
      secondaryText:
        "The hypothlamus, which checks the amount of hormones in the blood and regulate the autonomic nervous system and endocrine system, secretes gonadrotropin-releasing hormone.",
    },
    {
      boxImage:
        require('../../assets/images/data2Box4.png'),
      primaryText: "From the pituitary gland to the ovaries",
      secondaryText:
        "The pitutary gland, stimulated by hormones, secretes the gonadotropic hormones follicle-stimulating hormone (FSH) and luteinizing hormone (LH), which send commands to the ovaries.",
    },
    {
      boxImage:
        require('../../assets/images/data2Box5.png'),
      primaryText: "The ovaries secrete female hormones",
      secondaryText:
        "The ovaries, in the response to hormones secreted by the pitutary gland, secrete estrogen and progesterone.",
    },
    {
      boxImage:
        require('../../assets/images/data2Box6.png'),
      primaryText: "Beware of hormonal imbalance",
      secondaryText:
        "When female hormones are not secreted properly, it can cause problems such as irregular mesturation, and the balance of the autonomic nervous system can be disrupted, resulting in headaches, fatigue, and other symptoms.",
    },
    {
      boxImage:
        require('../../assets/images/data2Box7.png'),
      primaryText:
        "If your periods continues to be irregular or unwell, seek medical help.",
      secondaryText:
        "To find out which organ involved in hormone secretion is not functioning properly, it is necessary to measure hornone levels through a blood test.",
    },
    {
      boxImage:
        require('../../assets/images/data2Box8.png'),
      primaryText: "Thank you for watching",
      secondaryText:
        "If theres somthing you want to see again, you can add it to your favorites by clicking the star at the bottom right.",
    },
  ],
};

export const useCardHydrate = (id) => {
  return useQuery({
    queryKey: ["card", id],
    queryFn: async () => {
      // const docRef = doc(db, 'cardsMetaData', id)
      // const res = await getDoc(docRef)

      // return res.data() || {}
      if (id === "OLIxJpkqPWzdMOhtF90o") {
        return data1;
      } else {
        return data2;
      }
    },
    //   enabled :!!id
  });
};
