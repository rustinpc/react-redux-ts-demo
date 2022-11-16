import { selectClientsToDisplay, selectSelectedClient } from ".";

const SAMPLE_CLIENTS = [
  {
    "name": "Brendon Taylor",
    "title": "Supervisor",
    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown",
    "quote": "I am a super-visor!",
    "nationality": "New Zealand"
  },
  {
    "name": "Ed Joyce<sup>TM</sup>",
    "title": "Chief Technical Officer",
    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription02&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Yellow",
    "quote": null,
    "nationality": "Ireland"
  },
  {
    "name": "Mithali Raj",
    "title": "Data Scientist",
    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Tongue&skinColor=Tanned",
    "quote": "Here I go scraping \"again\"",
    "nationality": "India"
  },
  {
    "name": "Laura Fallon",
    "title": "Chief Financial Officer",
    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Tanned",
    "quote": "That costs too much $."
  },
  {
    "name": "Alan Taylor",
    "title": "Lead Engineer",
    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Cry&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Tanned",
    "quote": "80% of the time it works every time",
    "nationality": "France"
  }
];

describe('client selectors', () => {
  describe('selectClientsToDisplay', () => {
    it('should return all clients when no search query', () => {
      expect(selectClientsToDisplay.resultFunc(SAMPLE_CLIENTS, '')).toMatchObject(SAMPLE_CLIENTS);
    });
    it('should not search the avatar property', () => {
      expect(selectClientsToDisplay.resultFunc(SAMPLE_CLIENTS, 'avataaars')).toMatchObject([]);
    });
    it('should not be case sensitive', () => {
      expect(selectClientsToDisplay.resultFunc(SAMPLE_CLIENTS, 'TIME')).toMatchObject([SAMPLE_CLIENTS[4]]);
    });
    it('finds matches from any property', () => {
      expect(selectClientsToDisplay.resultFunc(SAMPLE_CLIENTS, 'of')).toMatchObject([SAMPLE_CLIENTS[1],SAMPLE_CLIENTS[3],SAMPLE_CLIENTS[4]]);
    });
  });

  describe('selectSelectedClient', () => {
    it('should return null if index does not exist', () => {
      expect(selectSelectedClient.resultFunc(SAMPLE_CLIENTS, 6)).toBe(null);
      expect(selectSelectedClient.resultFunc(SAMPLE_CLIENTS, -1)).toBe(null);
    });
    it('should return null in index not set', () => {
      expect(selectSelectedClient.resultFunc(SAMPLE_CLIENTS, null)).toBe(null);
      expect(selectSelectedClient.resultFunc(SAMPLE_CLIENTS, undefined)).toBe(null);
    });
    it('should return client if index is valid', () => {
      expect(selectSelectedClient.resultFunc(SAMPLE_CLIENTS, 0)).toMatchObject(SAMPLE_CLIENTS[0]);
      expect(selectSelectedClient.resultFunc(SAMPLE_CLIENTS, 4)).toMatchObject(SAMPLE_CLIENTS[4]);
    });
  });
});
