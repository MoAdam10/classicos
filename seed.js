const {green, red} = require('chalk')

const {db, Car} = require('./server/db')

const cars = [
   {
      name: 'Duesenberg SJ LA Phaeton',
      make: 'Duesenberg',
      model: 'J',
      description: 'Duesenberg was a luxury automobile company based in Auburn, Indiana, that was active from 1913 to 1937. Introduced in 1932, the supercharged Model J of their popular roadsters could achieve speeds of over 135 miles per hour. The car\'s speed potential gave it legendary status in its time, and it is now looked upon as an automotive technological marve',
      imageUrl: 'http://www.truckchamp.com/60%20Iconic%20and%20Classic%20Cars_files/800px-Duesenberg_Convertible_SJ_LA_Grand_Dual-Cowl_Phaeton_1.jpg'
   },
   {
      name: "Lamborghini Countach",
      make: 'Lamborghini',
      model: 'Countach',
      description: "The Lamborghini Countach was a mid-engine sports car produced by the iconic Italian automaker Lamborghini from 1974 to 1989. Its famous wedge-shaped, angular design became immediately popular and would be featured by many other popular sports cars for the decades to follow its introduction. The Countach is considered by many car enthusiasts to be among the finest sports cars in history.",
      imageUrl: 'http://www.truckchamp.com/60%20Iconic%20and%20Classic%20Cars_files/lamborghini-countach-exfordy470-l.jpg'
   },
   {
      name: 'Jaguar xk120',
      make: 'Jaquar',
      model: 'XK120',
      description: 'The Jaguar XK120 is a sportscar that was manufactured by Jaguar from 1948 to 1954. It was the company\'s first postwar car, succeeding the SS 100 which halted production in 1940. Available in two convertible versions, the Jaguar XK120 was also very successful as a racecar and managed to set various world records in a span of three years.',
      imageUrl: 'http://www.truckchamp.com/60%20Iconic%20and%20Classic%20Cars_files/curves-for-days-underwhelmer447-l.jpg'

   },
   {
      name: 'Cheverolet Camaro',
      make: 'Cheverolet',
      model: '1969 Camaro',
      description: 'The Chevrolet Camaro is a car manufactured by the Chevrolet division of General Motors and it is commonly classified as a pony car. Sale of the car began in 1966 and it was designed to compete with the Ford Mustang. The 1969 Camaro was the lost model edition of the first generation and would later serve as the inspiration for the fifth-generation retro Camaro.',
      imageUrl: 'http://www.truckchamp.com/60%20Iconic%20and%20Classic%20Cars_files/1969_chevrolet_camaro_rs_350_convertible_red_frt_qtr-mashley.jpg'
   },
   {
      name: "Mercedes McLaren SLR",
      make: 'Mercedes',
      model: 'Mclaren SLR',
      description: 'The Mercedes McLaren SLR is a supercar that was jointly developed by Mercedes-Benz and McLaren Automotive. The car features an automatic gear box, a front mid-engined arrangement, and certain driving characteristics, leading to a GT classification for the car. This means that some of its rival vehicles include the Aston Martin DBS V12 and the Ferrari 599 GTB Fiorano. The SLR was dropped due to lack of sales in 2007.',
      imageUrl: 'http://www.truckchamp.com/60%20Iconic%20and%20Classic%20Cars_files/mercedes-mclaren-slr-stephenhanafin730-l.jpg'
   },
   {
      name: 'Ferrari 288',
      make: 'Ferrari',
      model: '288 GTO',
      description: 'The Ferrari 288 GTO is an exotic homologotation, from which the "O" in the name comes from, of the Ferrari 308 GTB produced from 1984 to 1986. The car was built to compete in the new Group B Race series with a minimum of 200 cars required for homologation. However, there were not enough entrants for the Group B series, leaving only the Group B Rally championship. This means that all 272 Ferrari 288 GTOs are road cars exclusively.',
      imageUrl: 'http://www.truckchamp.com/60%20Iconic%20and%20Classic%20Cars_files/800px-FerrariGTO.jpg'

   },
   {
      name: 'Chevy Bel Air',
      make: 'Cheverolet',
      model: 'Bel Air',
      description: 'The Chevrolet Bel Air is a full-size car produced by the Chevrolet division of General Motors from 1950 to 1975. When the first Chevy Bel Airs were introduced in the 1950s, their styles were intentionally revolutionary and would establish many design conventions that were followed for several decades to come. The 1955 Chevy Bel Air is notable because it gained a V8 engine option, one that performed so well that remained in production for decades.',
      imageUrl: 'http://www.truckchamp.com/60%20Iconic%20and%20Classic%20Cars_files/car-show-in-yoctangee-park-dok1831-l.jpg'
   },
   {
      name: 'Delorean DMC 12',
      make: 'Delorean',
      model: 'DMC 12',
      description: 'The DeLorean DMC-12 is a sports car that was manufactured in Northern Ireland to be sold in America from 1981 to 1982. The car is most commonly referred to as the DeLorean, as it was the only model ever produced by the company. The first prototype appeared in 1976 and 9,000 DeLoreans were produced by 1982, when production stopped. Today, only about 6,500 of these cars are believed to exist. This car is most well known for being used a time machine in the Back to the Future movies.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Delorean_dmc12_rear.jpg'
   },
]

const seed = async () => {
   try {
      await db.sync({force: true})
      await Promise.all(
         cars.map(car => {
            return Car.create(car)
         })
      )

   } catch (error) {
      console.log(red(error))
   }
}

module.exports = seed;

if(require.main === module){
   seed()
      .then(() => {
         console.log(green('Seeding sucesss!'));
         db.close();
      })
      .catch((err) => {
         console.error(red('Something went wrong!'));
         console.error(err)
         db.close()
      })
}