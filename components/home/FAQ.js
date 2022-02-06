const faqData = [
  {
    id: 1,
    question: 'What is BlogStream?',
    answer: `BlogStream is blog site where users can read articles from there favourite writers only when they are reading. And writers can post their articles easily 😃`
  },
  {
    id: 2,
    question: 'How is it better than other blog site?',
    answer: `You won't have to pay for any monthly subscriptions 😃. You will pay only a small amount when you are reading. This is to support your favourite writers.`
  },
  {
    id: 3,
    question: 'How to become a writer?',
    answer: `Login using any wallet such as metamask,math wallet,coin98 etc. and get access to dashboard.`
  }
]

const FAQ = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
          <div>
            <h2 className='text-3xl font-extrabold text-gray-900'>Frequently asked questions</h2>
            <p className='mt-4 text-lg text-gray-500'>
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href='#' className='font-bold text-gray-800'>
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className='mt-12 lg:mt-0 lg:col-span-2'>
            <dl className='space-y-12'>
              {faqData.map(({ id, question, answer }) => {
                return (
                  <div key={id}>
                    <dt className='text-lg leading-6 font-bold text-gray-900'>{question}</dt>
                    <dd className='mt-2 text-base text-gray-500'>{answer}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
