import Heading from '@components/bricks/Heading';
import ScrollReveal from '@components/bricks/ScrollReveal';
import Wrapper from '@components/bricks/Wrapper';

type Props = {
  prices: {
    oblast: string;
    jednosmerna: number;
    zpatecni: number;
  }[],
  specialPrices: {
    cena: string,
    mesto: {
      nazev: string
    }[],
  }[],
}

export default function Pricing({ prices, specialPrices }: Props) {
  return (
    <div className='bg-body-100'>
      <Wrapper as="section" size="base" paddedContent='sm'>
        <ScrollReveal>
          <Heading level={2} size="xl">Ceníky odjezdů</Heading>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 my-10'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex delectus possimus odit ipsam voluptas. Maxime aut aliquam dignissimos harum illum saepe modi iste voluptates, ratione dicta ad vitae cupiditate quas laborum nisi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates, vel nisi eius nihil reprehenderit, quidem temporibus iste corrupti quisquam culpa autem inventore harum?</p>
          </div>
        </ScrollReveal>
        <ScrollReveal staggerChildren className='flex flex-col gap-16 mt-20'>
          <div>
            <Heading level={3} size="base">Jízdné</Heading>
            <table className='max-w-2xl w-full'>
              <thead>
                <tr>
                  <td><Heading level={4} size="xs" className='mb-2 mt-7'>Cílová oblast</Heading></td>
                  <td><Heading level={4} size="xs" align='right' className='mb-2 mt-7'>Zpáteční jízdenka</Heading></td>
                  <td><Heading level={4} size="xs" align='right' className='mb-2 mt-7'>Jednosměrná jízdenka</Heading></td>
                </tr>
              </thead>
              <tbody>
                {prices.map((e: any, key: number) => (
                  <tr key={key}>
                    <td>{e.oblast}</td>
                    <td className='text-primary text-right py-2 font-medium'>{e.jednosmerna} Kč</td>
                    <td className='text-primary text-right py-2 font-medium'>{e.zpatecni} Kč</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* Nástupní místa */}
          <div>
            <Heading level={3} size="base">Nástupní místa</Heading>
            <table className='max-w-2xl w-full'>
              <thead>
                <tr>
                  <td><Heading level={4} size="xs" className='mb-5 mt-7'>Nástupní místo</Heading></td>
                  <td><Heading level={4} size="xs" align='right' className='mb-5 mt-7 min-w-[125px]'>Příplatek</Heading></td>
                </tr>
              </thead>
              <tbody className='divide-y-2'>
                {specialPrices.map((e: any, key: number) => {
                  return (
                    <tr key={key}>
                      <td>
                        {e.mesto.map((mesto: any, key: number) => (
                          key !== e.mesto.length - 1 ? mesto.nazev + ", " : mesto.nazev
                        )
                        )}
                      </td>
                      <td className='text-primary text-right py-2 font-medium'>{e.cena}{e.cena !== "Zdarma" && " Kč / osoba"}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Wrapper>
    </div>
  )
}