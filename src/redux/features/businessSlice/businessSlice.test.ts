import {
  businessReducer,
  BusinesssInitialState,
  loadAllBusinessActionCreator,
} from "./businessSlice";

describe("Given a businessReducer", () => {
  describe("When it is invoked with it's method loadAllBusiness", () => {
    test("Then it should show the list of business", () => {
      const loadBusiness = loadAllBusinessActionCreator([
        {
          id: "1",
          businessName: "Optica San antonio",
          category: "Salud",
          slogan: "Desde 1978",
          address: "c/ Rossello, 214",
          adhesionDate: "10/03/14",
          contactNumber: "934820396",
          businessImage: "string",
        },
      ]);
      const initialState = BusinesssInitialState;

      const expectedState = {
        business: [
          {
            id: "1",
            businessName: "Optica San antonio",
            category: "Salud",
            slogan: "Desde 1978",
            address: "c/ Rossello, 214",
            adhesionDate: "10/03/14",
            contactNumber: "934820396",
            businessImage: "string",
          },
        ],
      };
      const newState = businessReducer(initialState, loadBusiness);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
