const addPetSchema = {
  type: "object",
  properties: {
    picture: { type: "string" },
    type: { type: "string", minLength: 2},
    name: { type: "string", minLength: 2 },
    breed: { type: "string", minLength: 2},
    adoptionStatus: { type: "string" },
    height: { type: "string", minLength: 1 },
    weight: { type: "string", minLength: 1 },
    hypoallergenic: { type: "string" },
    color: { type: "string", minLength: 2 },
    dietary: { type: "string", minLength: 2 },
    bio: { type: "string" },
    saved: {type: "array"}
  },
  required: [
    // "picture",
    "type",
    "name",
    "breed",
    "adoptionStatus",
    "height",
    "weight",
    "hypoallergenic",
    "color",
    "dietary"
  ],
};

module.exports = { addPetSchema };
