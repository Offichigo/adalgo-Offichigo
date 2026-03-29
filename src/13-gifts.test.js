import { suite, test, expect } from "vitest";
import {
  totalPrice,
  mostExpensive,
  globalMostExpensive,
  preferedKid,
  distributeGifts,
} from "./13-gifts";

suite("totalPrice", () => {
  test("returns the sum of all gift prices", () => {
    const gifts = [
      { name: "iPhone", price: 800 },
      { name: "skateboard", price: 70 },
    ];
    expect(totalPrice(gifts)).toBe(870);
  });

  test("returns 0 for an empty array", () => {
    expect(totalPrice([])).toBe(0);
  });

  test("works with a single gift", () => {
    expect(totalPrice([{ name: "apple", price: 1 }])).toBe(1);
  });

  test("handles gifts with price 0", () => {
    expect(totalPrice([{ name: "rock", price: 0 }])).toBe(0);
  });
});

suite("mostExpensive", () => {
  test("returns the name of the most expensive gift", () => {
    const gifts = [
      { name: "iPhone", price: 800 },
      { name: "skateboard", price: 70 },
    ];
    expect(mostExpensive(gifts)).toBe("iPhone");
  });

  test("works with a single gift", () => {
    expect(mostExpensive([{ name: "apple", price: 1 }])).toBe("apple");
  });

  test("returns undefined when array is empty", () => {
    expect(mostExpensive([])).toBeUndefined();
  });

  test("returns the first in case of tie", () => {
    const gifts = [
      { name: "book", price: 50 },
      { name: "puzzle", price: 50 },
    ];
    expect(mostExpensive(gifts)).toBe("book");
  });
});

suite("globalMostExpensive", () => {
  test("returns the name of the most expensive gift across all kids", () => {
    const kids = [
      {
        name: "Issa",
        gifts: [
          { name: "iPhone", price: 800 },
          { name: "skateboard", price: 70 },
        ],
      },
      { name: "Noor", gifts: [{ name: "apple", price: 1 }] },
    ];
    expect(globalMostExpensive(kids)).toBe("iPhone");
  });

  test("works when the winner is not in the first kid's gifts", () => {
    const kids = [
      { name: "A", gifts: [{ name: "book", price: 20 }] },
      { name: "B", gifts: [{ name: "console", price: 400 }] },
    ];
    expect(globalMostExpensive(kids)).toBe("console");
  });

  test("returns undefined if all kids have no gifts", () => {
    const kids = [
      { name: "A", gifts: [] },
      { name: "B", gifts: [] },
    ];
    expect(globalMostExpensive(kids)).toBeUndefined();
  });

  test("returns undefined for an empty kids array", () => {
    expect(globalMostExpensive([])).toBeUndefined();
  });

  test("compares across multiple gifts per kid", () => {
    const kids = [
      {
        name: "A",
        gifts: [
          { name: "cheap", price: 5 },
          { name: "medium", price: 50 },
        ],
      },
      { name: "B", gifts: [{ name: "expensive", price: 300 }] },
    ];
    expect(globalMostExpensive(kids)).toBe("expensive");
  });
});

suite("preferedKid", () => {
  test("returns the kid with the most expensive total", () => {
    const kids = [
      {
        name: "Issa",
        gifts: [
          { name: "iPhone", price: 800 },
          { name: "skateboard", price: 70 },
        ],
      },
      {
        name: "Noor",
        gifts: [{ name: "apple", price: 1 }],
      },
    ];

    expect(preferedKid(kids)).toBe("Issa");
  });

  test("works with only one kid", () => {
    const kids = [
      {
        name: "Amina",
        gifts: [
          { name: "book", price: 20 },
          { name: "puzzle", price: 10 },
        ],
      },
    ];

    expect(preferedKid(kids)).toBe("Amina");
  });

  test("properly use the sum of all gifts to choose", () => {
    const kids = [
      {
        name: "Clara",
        gifts: [
          { name: "book", price: 20 },
          { name: "puzzle", price: 10 },
          { name: "jean", price: 70 },
          { name: "t-shirt", price: 20 },
        ],
      },
      {
        name: "Nina",
        gifts: [{ name: "jacket", price: 110 }],
      },
    ];

    expect(preferedKid(kids)).toBe("Clara");
  });

  test("returns the first kid in case of tied total gift prices", () => {
    const kids = [
      {
        name: "Liam",
        gifts: [{ name: "lego", price: 50 }],
      },
      {
        name: "Emma",
        gifts: [{ name: "doll", price: 50 }],
      },
    ];

    expect(preferedKid(kids)).toBe("Liam");
  });

  test("handles kids with no gifts (treated as total = 0)", () => {
    const kids = [
      {
        name: "Maya",
        gifts: [],
      },
      {
        name: "Jonas",
        gifts: [{ name: "ball", price: 10 }],
      },
    ];

    expect(preferedKid(kids)).toBe("Jonas");
  });

  test("handles zero and negative gift prices correctly", () => {
    const kids = [
      {
        name: "Alex",
        gifts: [
          { name: "rock", price: 0 },
          { name: "bad gift", price: -5 },
        ],
      },
      {
        name: "Bella",
        gifts: [{ name: "chocolate", price: 2 }],
      },
    ];

    expect(preferedKid(kids)).toBe("Bella");
  });

  test("returns undefined if given an empty array", () => {
    expect(preferedKid([])).toBeUndefined();
  });

  test("works with many kids", () => {
    const kids = [
      { name: "A", gifts: [{ name: "g1", price: 10 }] },
      { name: "B", gifts: [{ name: "g1", price: 20 }] },
      { name: "C", gifts: [{ name: "g1", price: 5 }] },
      { name: "D", gifts: [{ name: "g1", price: 40 }] },
    ];

    expect(preferedKid(kids)).toBe("D");
  });
});

suite("distributeGifts", () => {
  const clone = (obj) => JSON.parse(JSON.stringify(obj));

  test("mutates the gifts array by emptying it", () => {
    const gifts = [
      { name: "Car", price: 50 },
      { name: "Ball", price: 10 },
    ];

    const kids = [
      { name: "A", behaviorScore: 1, gifts: [] },
      { name: "B", behaviorScore: 0.5, gifts: [] },
    ];

    distributeGifts(gifts, kids);

    expect(gifts).toEqual([]); // MUST be emptied
  });

  test("gives expensive gifts first", () => {
    const gifts = [
      { name: "Cheap", price: 10 },
      { name: "Medium", price: 20 },
      { name: "Expensive", price: 100 },
    ];

    const kids = [
      { name: "A", behaviorScore: 1, gifts: [] },
      { name: "B", behaviorScore: 0.5, gifts: [] },
    ];

    distributeGifts(gifts, kids);

    expect(kids[0].gifts[0].name).toBe("Expensive");
  });

  test("balance priority over behaviorScore", () => {
    const gifts = [
      { name: "RC Car", price: 60 },
      { name: "Lego", price: 40 },
      { name: "Puzzle", price: 15 },
      { name: "Candy", price: 10 },
    ];

    const kids = [
      { name: "Alice", behaviorScore: 0.95, gifts: [] },
      { name: "Bob", behaviorScore: 0.85, gifts: [] },
      { name: "Charlie", behaviorScore: 0.4, gifts: [] },
    ];

    distributeGifts(gifts, kids);

    // First two big gifts
    expect(kids.find((k) => k.name === "Alice").gifts).toEqual([
      { name: "RC Car", price: 60 },
    ]);
    expect(kids.find((k) => k.name === "Bob").gifts).toEqual([
      { name: "Lego", price: 40 },
    ]);

    // Smaller gifts go to lowest total = Charlie
    expect(kids.find((k) => k.name === "Charlie").gifts).toEqual([
      { name: "Puzzle", price: 15 },
      { name: "Candy", price: 10 },
    ]);
  });

  test("behaviorScore used when totals are equal", () => {
    const gifts = [
      { name: "Gift1", price: 30 },
      { name: "Gift2", price: 20 },
    ];

    const kids = [
      { name: "High", behaviorScore: 1, gifts: [] },
      { name: "Low", behaviorScore: 0, gifts: [] },
    ];

    distributeGifts(gifts, kids);

    expect(kids.find((k) => k.name === "High").gifts[0].name).toBe("Gift1");
    expect(kids.find((k) => k.name === "Low").gifts[0].name).toBe("Gift2");
  });

  test("kids can start with pre-filled gifts and accumulate correctly", () => {
    const gifts = [{ name: "Toy", price: 30 }];

    const kids = [
      { name: "A", behaviorScore: 1, gifts: [{ name: "Book", price: 15 }] },
      { name: "B", behaviorScore: 0.5, gifts: [] },
    ];

    distributeGifts(gifts, kids);

    // B has 0 total → should receive the new gift
    expect(kids[1].gifts).toEqual([{ name: "Toy", price: 30 }]);
  });

  test("handles empty gifts gracefully", () => {
    const gifts = [];
    const kids = [{ name: "A", behaviorScore: 1, gifts: [] }];

    const result = distributeGifts(gifts, kids);

    expect(result).toBe(kids);
    expect(kids[0].gifts).toEqual([]);
  });

  test("handles empty kids array gracefully", () => {
    const gifts = [{ name: "Gift", price: 50 }];

    const kids = [];

    const result = distributeGifts(gifts, kids);

    // Should not crash
    expect(result).toEqual([]);
    // Should not modify gifts when there are no kids
    expect(gifts.length).toBe(1);
  });

  test("deterministic output: same input → same result", () => {
    const gifts1 = [
      { name: "A", price: 30 },
      { name: "B", price: 20 },
      { name: "C", price: 10 },
    ];
    const gifts2 = clone(gifts1);

    const kids1 = [
      { name: "X", behaviorScore: 1, gifts: [] },
      { name: "Y", behaviorScore: 0.5, gifts: [] },
    ];
    const kids2 = clone(kids1);

    distributeGifts(gifts1, kids1);
    distributeGifts(gifts2, kids2);

    expect(kids1).toEqual(kids2);
  });

  test("large gift list distributes evenly and empties gifts", () => {
    const gifts = Array.from({ length: 20 }, (_, i) => ({
      name: `Gift${i}`,
      price: i + 1, // increasing prices
    }));

    const kids = [
      { name: "A", behaviorScore: 0.9, gifts: [] },
      { name: "B", behaviorScore: 0.8, gifts: [] },
      { name: "C", behaviorScore: 0.7, gifts: [] },
    ];

    distributeGifts(gifts, kids);

    expect(gifts).toEqual([]); // MUST be empty

    // Totals should be balanced
    const totals = kids.map((k) => k.gifts.reduce((s, g) => s + g.price, 0));

    const max = Math.max(...totals);
    const min = Math.min(...totals);

    expect(max - min).toBeLessThanOrEqual(2); // very tight with 20 gifts
  });

  test("when behaviorScores tie, stable ordering assigns the more expensive first to the earlier kid", () => {
    const gifts = [
      { name: "Big", price: 50 },
      { name: "Small", price: 10 },
    ];

    const kids = [
      { name: "First", behaviorScore: 0.7, gifts: [] },
      { name: "Second", behaviorScore: 0.7, gifts: [] },
    ];

    distributeGifts(gifts, kids);

    expect(kids[0].gifts[0].name).toBe("Big");
    expect(kids[1].gifts[0].name).toBe("Small");
  });
});
