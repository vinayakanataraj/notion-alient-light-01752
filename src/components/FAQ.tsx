import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are AI development services?",
      answer: "AI development services encompass designing, building, and deploying custom artificial intelligence solutions tailored to your business needs. This includes machine learning models, natural language processing, computer vision, and automation tools that help streamline operations and improve decision-making.",
    },
    {
      question: "What types of processes can be automated using AI?",
      answer: "AI can automate a wide range of processes including customer service through chatbots, content generation, lead qualification, data analysis, email responses, appointment scheduling, document processing, and many repetitive tasks that currently require manual effort.",
    },
    {
      question: "How long does it take to implement AI automation?",
      answer: "Implementation timelines vary based on project complexity. Simple automation solutions can be deployed in 2-4 weeks, while more complex, custom AI systems may take 2-6 months. We work in agile sprints to deliver incremental value throughout the development process.",
    },
    {
      question: "Will AI automation disrupt my current operations?",
      answer: "Our approach is designed to integrate seamlessly with your existing workflows. We conduct thorough discovery and testing phases to ensure smooth deployment with minimal disruption. We also provide comprehensive training and support during the transition period.",
    },
    {
      question: "How much does AI automation cost?",
      answer: "Costs vary depending on the scope and complexity of your project. We offer both time-and-material and fixed-price models to suit different needs and budgets. Schedule a consultation to discuss your specific requirements and receive a tailored proposal.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">FAQs</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            We're here to help
          </h2>
          <p className="text-xl text-muted-foreground">
            FAQs designed to provide the information you need.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
