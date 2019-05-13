'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const sdgs = queryInterface.bulkInsert('sdgs', [{
      sdg_goal_no: '1',
      title: 'End poverty in all its forms everywhere',
      description: 'Goal 1 calls for an end to poverty in all its manifestations, including extreme poverty, over the next 15 years. All people everywhere, including the poorest and most vulnerable, should enjoy a basic standard of living and social protection benefits.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '2',
      title: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
      description: 'Goal 2 seeks to end hunger and all forms of malnutrition and to achieve sustainable food production by 2030. It is premised on the idea that everyone should have access to sufficient nutritious food, which will require widespread promotion of sustainable agriculture, a doubling of agricultural productivity, increased investments and properly functioning food markets.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '3',
      title: 'Ensure healthy lives and promote well-being for all at all ages',
      description: 'Goal 3 aims to ensure health and well-being for all at all ages by improving reproductive, maternal and child health; ending the epidemics of major communicable diseases; reducing non-communicable and environmental diseases; achieving universal health coverage; and ensuring access to safe, affordable and effective medicines and vaccines for all.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '4',
      title: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
      description: 'Goal 4 focuses on the acquisition of foundational and higher-order skills; greater and more equitable access to technical and vocational education and training and higher education; training throughout life; and the knowledge, skills and values needed to function well and contribute to society.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '5',
      title: 'Achieve gender equality and empower all women and girls',
      description: 'Goal 5 aims to empower women and girls to reach their full potential, which requires eliminating all forms of discrimination and violence against them, including harmful practices. It seeks to ensure that they have every opportunity for sexual and reproductive health and reproductive rights; receive due recognition for their unpaid work; have full access to productive resources; and enjoy equal participation with men in political, economic and public life.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '6',
      title: 'Ensure availability and sustainable management of water and sanitation for all',
      description: 'Goal 6 goes beyond drinking water, sanitation and hygiene to also address the quality and sustainability of water resources. Achieving this Goal, which is critical to the survival of people and the planet, means expanding international cooperation and garnering the support of local communities in improving water and sanitation management.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '7',
      title: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
      description: 'Goal 7 seeks to promote broader energy access and increased use of renewable energy, including through enhanced international cooperation and expanded infrastructure and technology for clean energy.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '8',
      title: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
      description: 'Goal 8 aims to provide opportunities for full and productive employment and decent work for all while eradicating forced labour, human trafficking and child labour.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '9',
      title: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
      description: 'Goal 9 focuses on the promotion of infrastructure development, industrialization and innovation. This can be accomplished through enhanced international and domestic financial, technological and technical support, research and innovation, and increased access to information and communication technology.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '10',
      title: 'Reduce inequality within and among countries',
      description: 'Goal 10 calls for reducing inequalities in income, as well as those based on sex, age, disability, race, class, ethnicity, religion and opportunity—both within and among countries. It also aims to ensure safe, orderly and regular migration and addresses issues related to representation of developing countries in global decision-making and development assistance.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '11',
      title: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
      description: 'Goal 11 aims to renew and plan cities and other human settlements in a way that fosters community cohesion and personal security while stimulating innovation and employment.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '12',
      title: 'Ensure sustainable consumption and production patterns',
      description: 'Goal 12 aims to promote sustainable consumption and production patterns through measures such as specific policies and international agreements on the management of materials that are toxic to the environment.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '13',
      title: 'Take urgent action to combat climate change and its impacts',
      description: 'Climate change presents the single biggest threat to development, and its widespread, unprecedented effects disproportionately burden the poorest and the most vulnerable. Urgent action is needed not only to combat climate change and its impacts, but also to build resilience in responding to climate-related hazards and natural disasters.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '14',
      title: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
      description: 'Goal 14 seeks to promote the conservation and sustainable use of marine and coastal ecosystems, prevent marine pollution and increase the economic benefits to small island developing States and LDCs from the sustainable use of marine resources.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '15',
      title: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss',
      description: 'Goal 15 focuses on managing forests sustainably, restoring degraded lands and successfully combating desertification, reducing degraded natural habitats and ending biodiversity loss. All of these efforts in combination will help ensure that livelihoods are preserved for those that depend directly on forests and other ecosystems, that biodiversity will thrive, and that the benefits of these natural resources will be enjoyed for generations to come.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '16',
      title: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels',
      description: 'Goal 16 envisages peaceful and inclusive societies based on respect for human rights, the rule of law, good governance at all levels, and transparent, effective and accountable institutions. Many countries still face protracted violence and armed conflict, and far too many people are poorly supported by weak institutions and lack access to justice, information and other fundamental freedoms.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sdg_goal_no: '17',
      title: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development',
      description: 'The 2030 Agenda requires a revitalized and enhanced global partnership that mobilizes all available resources from Governments, civil society, the private sector, the United Nations system and other actors. Increasing support to developing countries, in particular LDCs, landlocked developing countries and small island developing States is fundamental to equitable progress for all.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

    const SdgTargets = queryInterface.bulkInsert('sdg_targets', [
      {
        sdg_id: '1',
        code: '1.1',
        title: 'By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day',
        description: 'By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '1',
        code: '1.2',
        title: 'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions',
        description: 'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '1',
        code: '1.3',
        title: 'Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable',
        description: 'Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '1',
        code: '1.4',
        title: 'By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance',
        description: 'By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '1',
        code: '1.5',
        title: 'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters',
        description: 'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '1',
        code: '1.a',
        title: 'Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions',
        description: 'Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '1',
        code: '1.b',
        title: 'Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions',
        description: 'Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '2',
        code: '2.1',
        title: 'By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round',
        description: 'By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '2',
        code: '2.2',
        title: 'By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons',
        description: 'By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '2',
        code: '2.3',
        title: 'By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment',
        description: 'By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '2',
        code: '2.4',
        title: 'By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality',
        description: 'By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '2',
        code: '2.5',
        title: 'By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed',
        description: 'By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '2',
        code: '2.a',
        title: 'Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries',
        description: 'Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '2',
        code: '2.b',
        title: 'Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round',
        description: 'Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '2',
        code: '2.c',
        title: 'Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility',
        description: 'Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.1',
        title: 'By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births',
        description: 'By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.2',
        title: 'By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births',
        description: 'By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.3',
        title: 'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases',
        description: 'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.4',
        title: 'By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being',
        description: 'By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.5',
        title: 'Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol',
        description: 'Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.6',
        title: 'By 2020, halve the number of global deaths and injuries from road traffic accidents',
        description: 'By 2020, halve the number of global deaths and injuries from road traffic accidents',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.7',
        title: 'By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes',
        description: 'By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.8',
        title: 'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all',
        description: 'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.9',
        title: 'By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination',
        description: 'By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.a',
        title: 'Strengthen the implementation of the World Health Organization Framework Convention on Tobacco Control in all countries, as appropriate',
        description: 'Strengthen the implementation of the World Health Organization Framework Convention on Tobacco Control in all countries, as appropriate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.b',
        title: 'Support the research and development of vaccines and medicines for the communicable and non-communicable diseases that primarily affect developing countries, provide access to affordable essential medicines and vaccines, in accordance with the Doha Declaration on the TRIPS Agreement and Public Health, which affirms the right of developing countries to use to the full the provisions in the Agreement on Trade-Related Aspects of Intellectual Property Rights regarding flexibilities to protect public health, and, in particular, provide access to medicines for all',
        description: 'Support the research and development of vaccines and medicines for the communicable and non-communicable diseases that primarily affect developing countries, provide access to affordable essential medicines and vaccines, in accordance with the Doha Declaration on the TRIPS Agreement and Public Health, which affirms the right of developing countries to use to the full the provisions in the Agreement on Trade-Related Aspects of Intellectual Property Rights regarding flexibilities to protect public health, and, in particular, provide access to medicines for all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.c',
        title: 'Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries, especially in least developed countries and small island developing States',
        description: 'Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries, especially in least developed countries and small island developing States',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '3',
        code: '3.d',
        title: 'Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks',
        description: 'Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.1',
        title: 'By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes',
        description: 'By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.2',
        title: 'By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education',
        description: 'By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.3',
        title: 'By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university',
        description: 'By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.4',
        title: 'By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship',
        description: 'By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.5',
        title: 'By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations',
        description: 'By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.6',
        title: 'By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy',
        description: 'By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.7',
        title: 'By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture\'s contribution to sustainable development',
        description: 'By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture\'s contribution to sustainable development',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.a',
        title: 'Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all',
        description: 'Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.b',
        title: 'By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries',
        description: 'By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '4',
        code: '4.c',
        title: 'By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing States',
        description: 'By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing States',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.1',
        title: 'End all forms of discrimination against all women and girls everywhere',
        description: 'End all forms of discrimination against all women and girls everywhere',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.2',
        title: 'Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation',
        description: 'Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.3',
        title: 'Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation',
        description: 'Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.4',
        title: 'Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate',
        description: 'Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.5',
        title: 'Ensure women\'s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life',
        description: 'Ensure women\'s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.6',
        title: 'Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences',
        description: 'Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.a',
        title: 'Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and other forms of property, financial services, inheritance and natural resources, in accordance with national laws',
        description: 'Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and other forms of property, financial services, inheritance and natural resources, in accordance with national laws',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.b',
        title: 'Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women',
        description: 'Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '5',
        code: '5.c',
        title: 'Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels',
        description: 'Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.1',
        title: 'By 2030, achieve universal and equitable access to safe and affordable drinking water for all',
        description: 'By 2030, achieve universal and equitable access to safe and affordable drinking water for all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.2',
        title: 'By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations',
        description: 'By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.3',
        title: 'By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally',
        description: 'By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.4',
        title: 'By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity',
        description: 'By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.5',
        title: 'By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate',
        description: 'By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.6',
        title: 'By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes',
        description: 'By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.a',
        title: 'By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies',
        description: 'By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '6',
        code: '6.b',
        title: 'Support and strengthen the participation of local communities in improving water and sanitation management',
        description: 'Support and strengthen the participation of local communities in improving water and sanitation management',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '7',
        code: '7.1',
        title: 'By 2030, ensure universal access to affordable, reliable and modern energy services',
        description: 'By 2030, ensure universal access to affordable, reliable and modern energy services',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '7',
        code: '7.2',
        title: 'By 2030, increase substantially the share of renewable energy in the global energy mix',
        description: 'By 2030, increase substantially the share of renewable energy in the global energy mix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '7',
        code: '7.3',
        title: 'By 2030, double the global rate of improvement in energy efficiency',
        description: 'By 2030, double the global rate of improvement in energy efficiency',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '7',
        code: '7.a',
        title: 'By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology',
        description: 'By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '7',
        code: '7.b',
        title: 'By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States and landlocked developing countries, in accordance with their respective programmes of support',
        description: 'By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States and landlocked developing countries, in accordance with their respective programmes of support',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.2',
        title: 'Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors',
        description: 'Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.3',
        title: 'Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services',
        description: 'Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.4',
        title: 'Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-Year Framework of Programmes on Sustainable Consumption and Production, with developed countries taking the lead',
        description: 'Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-Year Framework of Programmes on Sustainable Consumption and Production, with developed countries taking the lead',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.5',
        title: 'By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value',
        description: 'By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.6',
        title: 'By 2020, substantially reduce the proportion of youth not in employment, education or training',
        description: 'By 2020, substantially reduce the proportion of youth not in employment, education or training',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.7',
        title: 'Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms',
        description: 'Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.1',
        title: 'Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries',
        description: 'Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.8',
        title: 'Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment',
        description: 'Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.9',
        title: 'By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products',
        description: 'By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.10',
        title: 'Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all',
        description: 'Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.a',
        title: 'Increase Aid for Trade support for developing countries, in particular least developed countries, including through the Enhanced Integrated Framework for Trade-related Technical Assistance to Least Developed Countries',
        description: 'Increase Aid for Trade support for developing countries, in particular least developed countries, including through the Enhanced Integrated Framework for Trade-related Technical Assistance to Least Developed Countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '8',
        code: '8.b',
        title: 'By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization',
        description: 'By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.1',
        title: 'Develop quality, reliable, sustainable and resilient infrastructure, including regional and trans-border infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all',
        description: 'Develop quality, reliable, sustainable and resilient infrastructure, including regional and trans-border infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.2',
        title: 'Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry\'s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries',
        description: 'Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry\'s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.3',
        title: 'Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets',
        description: 'Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.4',
        title: 'By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities',
        description: 'By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.5',
        title: 'Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending',
        description: 'Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.a',
        title: 'Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, landlocked developing countries and small island developing States',
        description: 'Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, landlocked developing countries and small island developing States',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.b',
        title: 'Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities',
        description: 'Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '9',
        code: '9.c',
        title: 'Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020',
        description: 'Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.1',
        title: 'By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average',
        description: 'By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.2',
        title: 'By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status',
        description: 'By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.3',
        title: 'Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard',
        description: 'Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.4',
        title: 'Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality',
        description: 'Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.5',
        title: 'Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations',
        description: 'Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.6',
        title: 'Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions',
        description: 'Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.7',
        title: 'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies',
        description: 'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.a',
        title: 'Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements',
        description: 'Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.b',
        title: 'Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes',
        description: 'Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '10',
        code: '10.c',
        title: 'By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent',
        description: 'By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.1',
        title: 'By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums',
        description: 'By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.2',
        title: 'By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons',
        description: 'By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.3',
        title: 'By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries',
        description: 'By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.4',
        title: 'Strengthen efforts to protect and safeguard the world\'s cultural and natural heritage',
        description: 'Strengthen efforts to protect and safeguard the world\'s cultural and natural heritage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.5',
        title: 'By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations',
        description: 'By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.6',
        title: 'By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management',
        description: 'By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.7',
        title: 'By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities',
        description: 'By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.a',
        title: 'Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning',
        description: 'Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.b',
        title: 'By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015-2030, holistic disaster risk management at all levels',
        description: 'By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015-2030, holistic disaster risk management at all levels',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '11',
        code: '11.c',
        title: 'Support least developed countries, including through financial and technical assistance, in building sustainable and resilient buildings utilizing local materials',
        description: 'Support least developed countries, including through financial and technical assistance, in building sustainable and resilient buildings utilizing local materials',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.1',
        title: 'Implement the 10-Year Framework of Programmes on Sustainable Consumption and Production Patterns, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries',
        description: 'Implement the 10-Year Framework of Programmes on Sustainable Consumption and Production Patterns, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.2',
        title: 'By 2030, achieve the sustainable management and efficient use of natural resources',
        description: 'By 2030, achieve the sustainable management and efficient use of natural resources',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.3',
        title: 'By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses',
        description: 'By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.4',
        title: 'By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment',
        description: 'By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.5',
        title: 'By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse',
        description: 'By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.6',
        title: 'Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle',
        description: 'Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.7',
        title: 'Promote public procurement practices that are sustainable, in accordance with national policies and priorities',
        description: 'Promote public procurement practices that are sustainable, in accordance with national policies and priorities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.8',
        title: 'By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature',
        description: 'By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.a',
        title: 'Support developing countries to strengthen their scientific and technological capacity to move towards more sustainable patterns of consumption and production',
        description: 'Support developing countries to strengthen their scientific and technological capacity to move towards more sustainable patterns of consumption and production',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.b',
        title: 'Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products',
        description: 'Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '12',
        code: '12.c',
        title: 'Rationalize inefficient fossil-fuel subsidies that encourage wasteful consumption by removing market distortions, in accordance with national circumstances, including by restructuring taxation and phasing out those harmful subsidies, where they exist, to reflect their environmental impacts, taking fully into account the specific needs and conditions of developing countries and minimizing the possible adverse impacts on their development in a manner that protects the poor and the affected communities',
        description: 'Rationalize inefficient fossil-fuel subsidies that encourage wasteful consumption by removing market distortions, in accordance with national circumstances, including by restructuring taxation and phasing out those harmful subsidies, where they exist, to reflect their environmental impacts, taking fully into account the specific needs and conditions of developing countries and minimizing the possible adverse impacts on their development in a manner that protects the poor and the affected communities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '13',
        code: '13.1',
        title: 'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries',
        description: 'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '13',
        code: '13.2',
        title: 'Integrate climate change measures into national policies, strategies and planning',
        description: 'Integrate climate change measures into national policies, strategies and planning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '13',
        code: '13.3',
        title: 'Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning',
        description: 'Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '13',
        code: '13.a',
        title: 'Implement the commitment undertaken by developed-country parties to the United Nations Framework Convention on Climate Change to a goal of mobilizing jointly $100 billion annually by 2020 from all sources to address the needs of developing countries in the context of meaningful mitigation actions and transparency on implementation and fully operationalize the Green Climate Fund through its capitalization as soon as possible',
        description: 'Implement the commitment undertaken by developed-country parties to the United Nations Framework Convention on Climate Change to a goal of mobilizing jointly $100 billion annually by 2020 from all sources to address the needs of developing countries in the context of meaningful mitigation actions and transparency on implementation and fully operationalize the Green Climate Fund through its capitalization as soon as possible',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '13',
        code: '13.b',
        title: 'Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities',
        description: 'Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.1',
        title: 'By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution',
        description: 'By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.6',
        title: 'By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation [c]',
        description: 'By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation [c]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.2',
        title: 'By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans',
        description: 'By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.7',
        title: 'By 2030, increase the economic benefits to small island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism',
        description: 'By 2030, increase the economic benefits to small island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.3',
        title: 'Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels',
        description: 'Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.a',
        title: 'Increase scientific knowledge, develop research capacity and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission Criteria and Guidelines on the Transfer of Marine Technology, in order to improve ocean health and to enhance the contribution of marine biodiversity to the development of developing countries, in particular small island developing States and least developed countries',
        description: 'Increase scientific knowledge, develop research capacity and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission Criteria and Guidelines on the Transfer of Marine Technology, in order to improve ocean health and to enhance the contribution of marine biodiversity to the development of developing countries, in particular small island developing States and least developed countries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.4',
        title: 'By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics',
        description: 'By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.b',
        title: 'Provide access for small-scale artisanal fishers to marine resources and markets',
        description: 'Provide access for small-scale artisanal fishers to marine resources and markets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.5',
        title: 'By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information',
        description: 'By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '14',
        code: '14.c',
        title: 'Enhance the conservation and sustainable use of oceans and their resources by implementing international law as reflected in the United Nations Convention on the Law of the Sea, which provides the legal framework for the conservation and sustainable use of oceans and their resources, as recalled in paragraph 158 of \'The future we want\'',
        description: 'Enhance the conservation and sustainable use of oceans and their resources by implementing international law as reflected in the United Nations Convention on the Law of the Sea, which provides the legal framework for the conservation and sustainable use of oceans and their resources, as recalled in paragraph 158 of \'The future we want\'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.1',
        title: 'By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements',
        description: 'By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.2',
        title: 'By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally',
        description: 'By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.3',
        title: 'By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world',
        description: 'By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.4',
        title: 'By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development',
        description: 'By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.5',
        title: 'Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species',
        description: 'Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.6',
        title: 'Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed',
        description: 'Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.7',
        title: 'Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products',
        description: 'Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.8',
        title: 'By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species',
        description: 'By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.9',
        title: 'By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts',
        description: 'By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.a',
        title: 'Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems',
        description: 'Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.b',
        title: 'Mobilize significant resources from all sources and at all levels to finance sustainable forest management and provide adequate incentives to developing countries to advance such management, including for conservation and reforestation',
        description: 'Mobilize significant resources from all sources and at all levels to finance sustainable forest management and provide adequate incentives to developing countries to advance such management, including for conservation and reforestation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '15',
        code: '15.c',
        title: 'Enhance global support for efforts to combat poaching and trafficking of protected species, including by increasing the capacity of local communities to pursue sustainable livelihood opportunities',
        description: 'Enhance global support for efforts to combat poaching and trafficking of protected species, including by increasing the capacity of local communities to pursue sustainable livelihood opportunities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.1',
        title: 'Significantly reduce all forms of violence and related death rates everywhere',
        description: 'Significantly reduce all forms of violence and related death rates everywhere',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.2',
        title: 'End abuse, exploitation, trafficking and all forms of violence against and torture of children',
        description: 'End abuse, exploitation, trafficking and all forms of violence against and torture of children',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.3',
        title: 'Promote the rule of law at the national and international levels and ensure equal access to justice for all',
        description: 'Promote the rule of law at the national and international levels and ensure equal access to justice for all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.4',
        title: 'By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime',
        description: 'By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.5',
        title: 'Substantially reduce corruption and bribery in all their forms',
        description: 'Substantially reduce corruption and bribery in all their forms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.6',
        title: 'Develop effective, accountable and transparent institutions at all levels',
        description: 'Develop effective, accountable and transparent institutions at all levels',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.7',
        title: 'Ensure responsive, inclusive, participatory and representative decision-making at all levels',
        description: 'Ensure responsive, inclusive, participatory and representative decision-making at all levels',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.8',
        title: 'Broaden and strengthen the participation of developing countries in the institutions of global governance',
        description: 'Broaden and strengthen the participation of developing countries in the institutions of global governance',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '16',
        code: '16.9',
        title: 'By 2030, provide legal identity for all, including birth registration',
        description: 'By 2030, provide legal identity for all, including birth registration',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '16',
        code: '16.10',
        title: 'Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements',
        description: 'Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '16',
        code: '16.a',
        title: 'Strengthen relevant national institutions, including through international cooperation, for building capacity at all levels, in particular in developing countries, to prevent violence and combat terrorism and crime',
        description: 'Strengthen relevant national institutions, including through international cooperation, for building capacity at all levels, in particular in developing countries, to prevent violence and combat terrorism and crime',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '16',
        code: '16.b',
        title: 'Promote and enforce non-discriminatory laws and policies for sustainable development',
        description: 'Promote and enforce non-discriminatory laws and policies for sustainable development',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.1',
        title: 'Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection',
        description: 'Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.2',
        title: 'Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of gross national income for official development assistance (ODA/GNI) to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a target to provide at least 0.20 per cent of ODA/GNI to least developed countries',
        description: 'Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of gross national income for official development assistance (ODA/GNI) to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a target to provide at least 0.20 per cent of ODA/GNI to least developed countries',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.3',
        title: 'Mobilize additional financial resources for developing countries from multiple sources',
        description: 'Mobilize additional financial resources for developing countries from multiple sources',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.4',
        title: 'Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress',
        description: 'Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.5',
        title: 'Adopt and implement investment promotion regimes for least developed countries',
        description: 'Adopt and implement investment promotion regimes for least developed countries',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.6',
        title: 'Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge-sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism',
        description: 'Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge-sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.7',
        title: 'Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed',
        description: 'Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.8',
        title: 'Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology',
        description: 'Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.9',
        title: 'Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the Sustainable Development Goals, including through North-South, South-South and triangular cooperation',
        description: 'Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the Sustainable Development Goals, including through North-South, South-South and triangular cooperation',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.10',
        title: 'Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda',
        description: 'Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.11',
        title: 'Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries\' share of global exports by 2020',
        description: 'Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries\' share of global exports by 2020',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.12',
        title: 'Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access',
        description: 'Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.13',
        title: 'Enhance global macroeconomic stability, including through policy coordination and policy coherence',
        description: 'Enhance global macroeconomic stability, including through policy coordination and policy coherence',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.14',
        title: 'Enhance policy coherence for sustainable development',
        description: 'Enhance policy coherence for sustainable development',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.15',
        title: 'Respect each country\'s policy space and leadership to establish and implement policies for poverty eradication and sustainable development',
        description: 'Respect each country\'s policy space and leadership to establish and implement policies for poverty eradication and sustainable development',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.16',
        title: 'Enhance the Global Partnership for Sustainable Development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the Sustainable Development Goals in all countries, in particular developing countries',
        description: 'Enhance the Global Partnership for Sustainable Development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the Sustainable Development Goals in all countries, in particular developing countries',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.17',
        title: 'Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships',
        description: 'Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sdg_id: '17',
        code: '17.18',
        title: 'By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts',
        description: 'By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        sdg_id: '17',
        code: '17.19',
        title: 'By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries',
        description: 'By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    const SdgIndicators = queryInterface.bulkInsert('sdg_indicators', [

      {
        code: '1.1.1',
        title: '',
        description: 'Proportion of population below the international poverty line, by sex, age, employment status and geographical location (urban/rural)',
        sdg_target_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '1.2.1',
        title: '',
        description: 'Proportion of population living below the national poverty line, by sex and age',
        sdg_target_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '1.2.2',
        description: 'Proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions',
        sdg_target_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '1.3.1',
        description: 'Proportion of population covered by social protection floors/systems, by sex, distinguishing children, unemployed persons, older persons, persons with disabilities, pregnant women, newborns, work-injury victims and the poor and the vulnerable',
        sdg_target_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '1.4.1',
        description: 'Proportion of population living in households with access to basic services',
        sdg_target_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

    return Promise.all([
      sdgs,
      SdgTargets,
      SdgIndicators
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
Add reverting commands here.
Return a promise to correctly handle asynchronicity.

Example:
return queryInterface.bulkDelete('People', null, {});
    */
  }
}