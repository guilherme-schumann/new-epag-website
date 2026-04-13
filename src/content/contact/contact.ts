export const contactContent = {
  'pt-BR': {
    headline: 'FALE CONOSCO',
    headlineHighlight: 'COM A EPAG',
    subheadline: 'Aqui está a forma mais rápida de nos contatar e chegar onde você precisa.',
    chooseTopic: 'Por favor, escolha sobre o que você quer falar?',
    tabs: {
      sales: 'Falar com Vendas',
      merchant: 'Tornar-se um Merchant',
    },
    sales: {
      title: 'Falar com Vendas',
      description:
        'Com a epag, você acessa todo o potencial das economias emergentes da América Latina. Preencha o formulário abaixo para que um especialista em pagamentos da nossa equipe possa explorar o potencial da nossa solução para você.',
    },
    merchant: {
      title: 'Tornar-se um Merchant',
      description:
        'Junte-se à rede de merchants da epag e comece a aceitar pagamentos cross-border em toda a América Latina. Preencha o formulário abaixo e nossa equipe entrará em contato em breve.',
    },
    form: {
      firstName: 'Nome',
      firstNamePlaceholder: 'João',
      lastName: 'Sobrenome',
      lastNamePlaceholder: 'Silva',
      email: 'E-mail Corporativo',
      emailPlaceholder: 'joao@empresa.com',
      company: 'Empresa',
      companyPlaceholder: 'Acme Inc.',
      phone: 'Telefone',
      phonePlaceholder: '+55 (11) 99999-9999',
      message: 'Mensagem',
      messagePlaceholder: 'Conte-nos sobre seu negócio e necessidades de pagamento…',
      submit: 'Enviar Mensagem',
    },
  },

  en: {
    headline: 'GET IN TOUCH',
    headlineHighlight: 'WITH EPAG',
    subheadline: "Here's the fastest way to reach us and get where you need to go.",
    chooseTopic: 'Please choose what do you want to talk about?',
    tabs: {
      sales: 'Contact Sales',
      merchant: 'Become a Merchant',
    },
    sales: {
      title: 'Contact Sales',
      description:
        'With epag, you access the full potential of the Latin America rising economies. Fill out the form below so a payments specialist from our team can help explore our solution potential for you.',
    },
    merchant: {
      title: 'Become a Merchant',
      description:
        'Join the epag merchant network and start accepting cross-border payments across Latin America. Fill out the form below and our team will get in touch with you shortly.',
    },
    form: {
      firstName: 'First Name',
      firstNamePlaceholder: 'John',
      lastName: 'Last Name',
      lastNamePlaceholder: 'Doe',
      email: 'Business Email',
      emailPlaceholder: 'john@company.com',
      company: 'Company',
      companyPlaceholder: 'Acme Inc.',
      phone: 'Phone',
      phonePlaceholder: '+1 (555) 000-0000',
      message: 'Message',
      messagePlaceholder: 'Tell us about your business and payment needs…',
      submit: 'Send Message',
    },
  },

  es: {
    headline: 'PONTE EN CONTACTO',
    headlineHighlight: 'CON EPAG',
    subheadline: 'Aquí está la forma más rápida de contactarnos y llegar a donde necesitas.',
    chooseTopic: '¿Por favor elige sobre qué quieres hablar?',
    tabs: {
      sales: 'Contactar Ventas',
      merchant: 'Convertirse en Merchant',
    },
    sales: {
      title: 'Contactar Ventas',
      description:
        'Con epag, accedes a todo el potencial de las economías emergentes de América Latina. Completa el formulario a continuación para que un especialista en pagos de nuestro equipo pueda explorar el potencial de nuestra solución para ti.',
    },
    merchant: {
      title: 'Convertirse en Merchant',
      description:
        'Únete a la red de merchants de epag y comienza a aceptar pagos cross-border en toda América Latina. Completa el formulario a continuación y nuestro equipo se pondrá en contacto contigo en breve.',
    },
    form: {
      firstName: 'Nombre',
      firstNamePlaceholder: 'Juan',
      lastName: 'Apellido',
      lastNamePlaceholder: 'García',
      email: 'Correo Corporativo',
      emailPlaceholder: 'juan@empresa.com',
      company: 'Empresa',
      companyPlaceholder: 'Acme Inc.',
      phone: 'Teléfono',
      phonePlaceholder: '+52 (55) 0000-0000',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos sobre tu negocio y necesidades de pago…',
      submit: 'Enviar Mensaje',
    },
  },
} as const;

export type ContactContent = typeof contactContent['en'];
