export type MenuItem = {
  name: string
  description?: string
  note?: string
}

export type MenuSection = {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

export type LocationMenu = {
  id: string
  label: string
  sections: MenuSection[]
}

export const menuData: LocationMenu[] = [
  {
    id: 'central',
    label: 'Nicky Cheese Central',
    sections: [
      {
        id: 'breakfast',
        title: 'Breakfast',
        subtitle: 'Disponible de 8 a 12 y de 16 a 20 hs',
        items: [
          {
            name: 'American Breakfast',
            description:
              'Huevos revueltos, american sausage, bacon, hashbrown y pan lactal de la casa. Dip de queso crema y mermelada de temporada.',
          },
          {
            name: 'Healthy Breakfast',
            description:
              'Huevos revueltos, espinacas y portobellos grillados, palta y queso feta con pan integral de la casa. Dip de queso crema y mermelada de temporada.',
          },
          {
            name: 'Scrambled Eggs',
            description:
              'Huevos revueltos y tostadas a elección. Dip de queso crema y mermelada estacional.',
            note: 'Disponible en versión burrito con blend de quesos. Podés sustituir las tostadas por Classic Pancakes.',
          },
        ],
      },
      {
        id: 'pancakes',
        title: 'Pancakes',
        items: [
          {
            name: 'Classic Pancakes',
            description: 'Panqueques, manteca y honey butter syrup.',
          },
          {
            name: 'Creamy Pancakes',
            description: 'Panqueques, frutos rojos, crema batida y honey butter syrup.',
          },
          {
            name: 'Chubby Pancakes',
            description: 'Panqueques, huevo frito, bacon y honey butter syrup.',
          },
        ],
      },
      {
        id: 'sandwiches',
        title: 'Sandwiches',
        items: [
          {
            name: 'Breakfast Sandwich',
            description:
              'Queso cheddar, huevo, hashbrown, bacon y crema agridulce de higos. Sale en pan de papa.',
            note: 'Opcional: sustituí el bacon por american sausage.',
          },
          {
            name: 'Club Sándwich',
            description:
              "Pollo de campo, queso cheddar, panceta, lomito artesanal, lechuga, tomate y Nicky's ranch. Sale en pan lactal de la casa.",
          },
          {
            name: 'Tuna Melt',
            description:
              'Pasta de atún, blend de quesos fundidos, queso cheddar, cebolla crispy y mayonesa umami. Sale en pan lactal de la casa.',
          },
          {
            name: 'Grilled Cheese',
            description: 'Con sopa de tomates asados. Sale con pan lactal de la casa.',
          },
        ],
      },
      {
        id: 'bowls',
        title: 'Bowls',
        items: [
          {
            name: 'Smoothie Bowl',
            description:
              'De banana, frutos rojos y leche de coco. Con frutas, escamas de coco, frutos secos y mantequilla de maní.',
          },
          {
            name: 'Oat Porridge',
            description:
              'De avena y leche de coco. Con frutas frescas, miel y frutos secos tostados.',
            note: 'Opcional vegan: maple syrup en vez de miel.',
          },
          {
            name: 'Yogurt',
            description:
              'Yogurt griego casero con granola (a base de quinoa, copos de maíz, cranberries y almendras), frutas frescas y miel.',
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        items: [
          {
            name: 'Chocolate Chips',
            description: 'Blend de chocolates y nueces.',
          },
          {
            name: 'Caramel & Hazelnut',
            description: 'Chocolate blanco caramelizado, caramelo y avellanas.',
          },
          {
            name: 'Chocolate Fudge Cookie',
            description: 'Chocolate y sal en escamas.',
          },
        ],
      },
      {
        id: 'cheesecakes',
        title: 'Cheesecakes',
        subtitle: 'Por porción o torta entera (24 cm) · Consultar por torta de temporada',
        items: [
          { name: 'Classic', description: 'Blend de quesos de la casa.' },
          { name: 'Sheep Cheese', description: 'Manchego de oveja.' },
          { name: 'Chocolate', description: 'Blend de chocolates.' },
          {
            name: 'Dulce de Leche Orgánico',
            description: 'Sale con salsa de dulce de leche.',
          },
          { name: 'Vanilla', description: 'Con chauchas de vainilla.' },
        ],
      },
      {
        id: 'coffee',
        title: 'Speciality Coffee',
        subtitle: 'Hot · Iced — Opcional: leche de avena',
        items: [
          { name: 'Espresso' },
          { name: 'Cortado' },
          { name: 'Americano' },
          { name: 'Cappuccino' },
          { name: 'Magic' },
          { name: 'Lungo' },
          { name: 'Latte' },
          { name: 'Flat White' },
          { name: 'Filtrado Americano', description: 'Sale en taza, incluye refill.' },
        ],
      },
      {
        id: 'lattes',
        title: 'Signature Lattes',
        subtitle: 'Hot · Iced',
        items: [
          { name: 'Vainilla Latte' },
          { name: 'Coconut Latte' },
          { name: 'Hazelnut Latte' },
          { name: 'Salted Caramel Latte' },
          { name: 'Matcha Latte' },
          { name: 'Chai Latte' },
        ],
      },
      {
        id: 'hot-drinks',
        title: 'Bebidas Calientes & Té',
        items: [
          {
            name: 'Flanders Hot Chocolate',
            description: 'Blend de chocolates, sale con marshmallow.',
          },
          { name: 'Hot Chocolate' },
          { name: 'Té Negro', description: 'Infusiones a base de Té Negro.' },
          { name: 'Earl Grey', description: 'Té Negro con especias.' },
          { name: 'Chai', description: 'Té Negro con especias.' },
          { name: 'Matcha', description: 'Infusión de Té Verde pulverizado.' },
          { name: 'Rooibos', description: 'Tisana sin cafeína hecha con raíz de rooibos.' },
        ],
      },
      {
        id: 'cold-drinks',
        title: 'Bebidas Frías',
        subtitle: 'Especiales de temporada y bebidas de la casa',
        items: [
          {
            name: 'Brown Shaken Spresso',
            description: 'Doble espresso batido con azúcar mascabo y leche.',
          },
          {
            name: 'Cream Top Americano',
            description: 'Americano con crema a base de leche condensada y cacao en polvo.',
          },
          {
            name: 'Tamarindo Sparkling Spresso',
            description:
              'Doble espresso, agua con gas, almíbar de tamarindo y ralladura de naranja.',
          },
          {
            name: 'Habana Smoothie',
            description:
              'Licuado de mango, ananá, banana, jugo de naranja, almendras y leche de avena.',
          },
          {
            name: 'Blackberry Matcha',
            description: 'Matcha con jarabe de arándanos y frambuesas.',
          },
          { name: 'Sparkling Espresso' },
          { name: 'Espresso Tonic' },
          { name: 'Iced Tea' },
          { name: 'Limonada', description: 'Frozen o batida.' },
          { name: 'Jugo de Naranja' },
          { name: 'Jugo de Temporada' },
        ],
      },
    ],
  },
  {
    id: 'bakehouse',
    label: 'Nicky Bakehouse',
    sections: [
      {
        id: 'bakehouse-viennoiserie',
        title: 'Viennoiserie',
        subtitle: 'Elaboración artesanal diaria',
        items: [
          {
            name: 'Croissant Clásico',
            description: 'Masa laminada con manteca de alta calidad. Crujiente por fuera, tierno por dentro.',
          },
          {
            name: 'Pain au Chocolat',
            description: 'Croissant relleno con chocolate negro de la casa.',
          },
          {
            name: 'Croissant de Almendras',
            description: 'Relleno de crema de almendras y cubierto con almendras fileteadas.',
          },
        ],
      },
      {
        id: 'bakehouse-panaderia',
        title: 'Panadería',
        subtitle: 'Panes artesanales de fermentación lenta',
        items: [
          {
            name: 'Focaccia del Día',
            description: 'Focaccia artesanal con ingredientes de temporada.',
          },
          {
            name: 'Banana Bread',
            description: 'Pan de banana húmedo con nueces y especias.',
          },
          {
            name: 'Pan Brioche',
            description: 'Brioche suave con manteca y miel. Disponible entero o en rodajas.',
          },
        ],
      },
      {
        id: 'bakehouse-dulce',
        title: 'Dulce',
        items: [
          {
            name: 'Muffin de Arándanos',
            description: 'Esponjoso, con arándanos frescos y streusel de avena.',
          },
          {
            name: 'Scone de Queso',
            description: 'Tierno, con queso cheddar y hierbas frescas.',
          },
          {
            name: 'Cookie de Temporada',
            description: 'Consultar variedades disponibles en el local.',
          },
        ],
      },
    ],
  },
]
