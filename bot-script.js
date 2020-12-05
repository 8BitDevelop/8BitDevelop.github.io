var botui = new BotUI('finAI-chatbot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi, Welcome to FinAI costumer support'
}).then(function () {
  return botui.message.add({
        content: 'What is your name?'
  });
}).then(function () {
  return botui.action.text({
    action: {
      placeholder: 'Your name'
    }
  });
}).then(function (res) {
  botui.message.add({
    content: 'Hello ' + res.value
  });
}).then(function(){
  return botui.action.button({
  action: [
    {
      text: 'Who can apply for home loan?',
      value: 'answer1'
    },
    {
      text:'How soon can I receive the money?',
      value:'answer2'
    },
    {
      text:'Can I appeal against your decision?',
      value:'answer3'
    },
    {
      text:'How can I improve my credit score?',
      value:'answer4'
    },
    {
      text:'Additional Questions',
      value:'answer5'
    }
  ]
});
}).then(function (res) {
    var message;
    if (res.value === "answer1") {
      message = 'To apply you need to be aged 18 or over, Permament resident in Republic of Ireland';
    }
    else if (res.value === "answer2") {
      message = 'if your loan is approved, loan officer with be in contact with you and provide you with aditional details, but usually funds will normally be available within 48 hours if your loan is approved';
    }
    else if (res.value === "answer3") {
      message = 'Yes, although we cannot give any assurances that our original decision will be overturned, You should support your appeal by providing any additional relevant information that was not taken into acccount at the time of our original decision. Full details of our appeals procedure can be obtained from your loan officer';
    }
    else if (res.value === "answer4") {
      message = 'Having a good credit history, paying bills on time, not missing payments and not applying for credit regularly will all help give you a good score. But generally these thins can improve your score: Being in the same job for a long time, owning your home, having lived at the same address for a while(a year or more)';
    }
    else if (res.value === "answer5") {
      message = 'If you have aditional or more specific questions, contact your loan officer and they will provide you with exact details';
    }

    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: message
    });
}).then(function(){
  return botui.action.button({
  action: [
    {
      text: 'Who can apply for home loan?',
      value: 'answer1'
    },
    {
      text:'How soon can I receive the money?',
      value:'answer2'
    },
    {
      text:'Can I appeal against your decision?',
      value:'answer3'
    },
    {
      text:'How can I improve my credit score?',
      value:'answer4'
    },
    {
      text:'Additional Questions',
      value:'answer5'
    }
  ]
});
}).then(function (res) {
    var message;
    if (res.value === "answer1") {
      message = 'To apply you need to be aged 18 or over, Permament resident in Republic of Ireland';
    }
    else if (res.value === "answer2") {
      message = 'if your loan is approved, loan officer with be in contact with you and provide you with aditional details, but usually funds will normally be available within 48 hours if your loan is approved';
    }
    else if (res.value === "answer3") {
      message = 'Yes, although we cannot give any assurances that our original decision will be overturned, You should support your appeal by providing any additional relevant information that was not taken into acccount at the time of our original decision. Full details of our appeals procedure can be obtained from your loan officer';
    }
    else if (res.value === "answer4") {
      message = 'Having a good credit history, paying bills on time, not missing payments and not applying for credit regularly will all help give you a good score. But generally these thins can improve your score: Being in the same job for a long time, owning your home, having lived at the same address for a while(a year or more)';
    }
    else if (res.value === "answer5") {
      message = 'If you have aditional or more specific questions, contact your loan officer and they will provide you with exact details';
    }

    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: message
    });
}).then(function(){
  return botui.action.button({
  action: [
    {
      text: 'Who can apply for home loan?',
      value: 'answer1'
    },
    {
      text:'How soon can I receive the money?',
      value:'answer2'
    },
    {
      text:'Can I appeal against your decision?',
      value:'answer3'
    },
    {
      text:'How can I improve my credit score?',
      value:'answer4'
    },
    {
      text:'Additional Questions',
      value:'answer5'
    }
  ]
});
}).then(function (res) {
    var message;
    if (res.value === "answer1") {
      message = 'To apply you need to be aged 18 or over, Permament resident in Republic of Ireland';
    }
    else if (res.value === "answer2") {
      message = 'if your loan is approved, loan officer with be in contact with you and provide you with aditional details, but usually funds will normally be available within 48 hours if your loan is approved';
    }
    else if (res.value === "answer3") {
      message = 'Yes, although we cannot give any assurances that our original decision will be overturned, You should support your appeal by providing any additional relevant information that was not taken into acccount at the time of our original decision. Full details of our appeals procedure can be obtained from your loan officer';
    }
    else if (res.value === "answer4") {
      message = 'Having a good credit history, paying bills on time, not missing payments and not applying for credit regularly will all help give you a good score. But generally these thins can improve your score: Being in the same job for a long time, owning your home, having lived at the same address for a while(a year or more)';
    }
    else if (res.value === "answer5") {
      message = 'If you have aditional or more specific questions, contact your loan officer and they will provide you with exact details';
    }

    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: message
    });
}).then(function(){
  return botui.action.button({
  action: [
    {
      text: 'Who can apply for home loan?',
      value: 'answer1'
    },
    {
      text:'How soon can I receive the money?',
      value:'answer2'
    },
    {
      text:'Can I appeal against your decision?',
      value:'answer3'
    },
    {
      text:'How can I improve my credit score?',
      value:'answer4'
    },
    {
      text:'Additional Questions',
      value:'answer5'
    }
  ]
});
}).then(function (res) {
    var message;
    if (res.value === "answer1") {
      message = 'To apply you need to be aged 18 or over, Permament resident in Republic of Ireland';
    }
    else if (res.value === "answer2") {
      message = 'if your loan is approved, loan officer with be in contact with you and provide you with aditional details, but usually funds will normally be available within 48 hours if your loan is approved';
    }
    else if (res.value === "answer3") {
      message = 'Yes, although we cannot give any assurances that our original decision will be overturned, You should support your appeal by providing any additional relevant information that was not taken into acccount at the time of our original decision. Full details of our appeals procedure can be obtained from your loan officer';
    }
    else if (res.value === "answer4") {
      message = 'Having a good credit history, paying bills on time, not missing payments and not applying for credit regularly will all help give you a good score. But generally these thins can improve your score: Being in the same job for a long time, owning your home, having lived at the same address for a while(a year or more)';
    }
    else if (res.value === "answer5") {
      message = 'If you have aditional or more specific questions, contact your loan officer and they will provide you with exact details';
    }

    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: message
    });
}).then(function(){
  return botui.action.button({
  action: [
    {
      text: 'Who can apply for home loan?',
      value: 'answer1'
    },
    {
      text:'How soon can I receive the money?',
      value:'answer2'
    },
    {
      text:'Can I appeal against your decision?',
      value:'answer3'
    },
    {
      text:'How can I improve my credit score?',
      value:'answer4'
    },
    {
      text:'Additional Questions',
      value:'answer5'
    }
  ]
});
}).then(function (res) {
    var message;
    if (res.value === "answer1") {
      message = 'To apply you need to be aged 18 or over, Permament resident in Republic of Ireland';
    }
    else if (res.value === "answer2") {
      message = 'if your loan is approved, loan officer with be in contact with you and provide you with aditional details, but usually funds will normally be available within 48 hours if your loan is approved';
    }
    else if (res.value === "answer3") {
      message = 'Yes, although we cannot give any assurances that our original decision will be overturned, You should support your appeal by providing any additional relevant information that was not taken into acccount at the time of our original decision. Full details of our appeals procedure can be obtained from your loan officer';
    }
    else if (res.value === "answer4") {
      message = 'Having a good credit history, paying bills on time, not missing payments and not applying for credit regularly will all help give you a good score. But generally these thins can improve your score: Being in the same job for a long time, owning your home, having lived at the same address for a while(a year or more)';
    }
    else if (res.value === "answer5") {
      message = 'If you have aditional or more specific questions, contact your loan officer and they will provide you with exact details';
    }

    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: message
    });
}).then(function(){
  return botui.action.button({
  action: [
    {
      text: 'Who can apply for home loan?',
      value: 'answer1'
    },
    {
      text:'How soon can I receive the money?',
      value:'answer2'
    },
    {
      text:'Can I appeal against your decision?',
      value:'answer3'
    },
    {
      text:'How can I improve my credit score?',
      value:'answer4'
    },
    {
      text:'Additional Questions',
      value:'answer5'
    }
  ]
});
}).then(function (res) {
    var message;
    if (res.value === "answer1") {
      message = 'To apply you need to be aged 18 or over, Permament resident in Republic of Ireland';
    }
    else if (res.value === "answer2") {
      message = 'if your loan is approved, loan officer with be in contact with you and provide you with aditional details, but usually funds will normally be available within 48 hours if your loan is approved';
    }
    else if (res.value === "answer3") {
      message = 'Yes, although we cannot give any assurances that our original decision will be overturned, You should support your appeal by providing any additional relevant information that was not taken into acccount at the time of our original decision. Full details of our appeals procedure can be obtained from your loan officer';
    }
    else if (res.value === "answer4") {
      message = 'Having a good credit history, paying bills on time, not missing payments and not applying for credit regularly will all help give you a good score. But generally these thins can improve your score: Being in the same job for a long time, owning your home, having lived at the same address for a while(a year or more)';
    }
    else if (res.value === "answer5") {
      message = 'If you have aditional or more specific questions, contact your loan officer and they will provide you with exact details';
    }

    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: message
    });
}).then(function(){
  return botui.action.button({
  action: [
    {
      text: 'Who can apply for home loan?',
      value: 'answer1'
    },
    {
      text:'How soon can I receive the money?',
      value:'answer2'
    },
    {
      text:'Can I appeal against your decision?',
      value:'answer3'
    },
    {
      text:'How can I improve my credit score?',
      value:'answer4'
    },
    {
      text:'Additional Questions',
      value:'answer5'
    }
  ]
});
}).then(function (res) {
    var message;
    if (res.value === "answer1") {
      message = 'To apply you need to be aged 18 or over, Permament resident in Republic of Ireland';
    }
    else if (res.value === "answer2") {
      message = 'if your loan is approved, loan officer with be in contact with you and provide you with aditional details, but usually funds will normally be available within 48 hours if your loan is approved';
    }
    else if (res.value === "answer3") {
      message = 'Yes, although we cannot give any assurances that our original decision will be overturned, You should support your appeal by providing any additional relevant information that was not taken into acccount at the time of our original decision. Full details of our appeals procedure can be obtained from your loan officer';
    }
    else if (res.value === "answer4") {
      message = 'Having a good credit history, paying bills on time, not missing payments and not applying for credit regularly will all help give you a good score. But generally these thins can improve your score: Being in the same job for a long time, owning your home, having lived at the same address for a while(a year or more)';
    }
    else if (res.value === "answer5") {
      message = 'If you have aditional or more specific questions, contact your loan officer and they will provide you with exact details';
    }

    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: message
    });
});