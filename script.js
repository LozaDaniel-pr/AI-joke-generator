function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "t943a9cb00f21f0o68208b41e7202bfc";

let context = "be polite and provide a very short answer";

let prompt = "when was the first AI created?";

let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiURL).then(showAnswer);
