import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'english-project';

  list = [
    { showCorrect: false, "sentences": "The chef prepares delicious meals.", "correct": "Delicious meals are prepared by the chef."},
    { showCorrect: false,"sentences": "The company launched a new product.", "correct": "A new product was launched by the company."},
    { showCorrect: false,"sentences": "The teacher explains complex topics.", "correct": "Complex topics are explained by the teacher."},
    { showCorrect: false,"sentences": "The mechanic fixed the car.", "correct": "The car was fixed by the mechanic."},
    { showCorrect: false,"sentences": "The kids are playing in the park.", "correct": "The park is being played in by the kids."},
    { showCorrect: false,"sentences": "The team won the championship.", "correct": "The championship was won by the team."},
    { showCorrect: false,"sentences": "The singer performed a beautiful song.", "correct": "A beautiful song was performed by the singer."},
    { showCorrect: false,"sentences": "The artist painted a stunning portrait.", "correct": "A stunning portrait was painted by the artist."},
    { showCorrect: false,"sentences": "The gardener is planting roses.", "correct": "Roses are being planted by the gardener."},
    { showCorrect: false,"sentences": "The scientist discovered a new species.", "correct": "A new species was discovered by the scientist."},
    { showCorrect: false,"sentences": "The chef will cook a special dinner.", "correct": "A special dinner will be cooked by the chef."},
    { showCorrect: false,"sentences": "The storm damaged the roof.", "correct": "The roof was damaged by the storm."},
    { showCorrect: false,"sentences": "The students are studying for the exam.", "correct": "The exam is being studied for by the students."},
    { showCorrect: false,"sentences": "The builder is constructing a new house.", "correct": "A new house is being constructed by the builder."},
    { showCorrect: false,"sentences": "The doctor prescribed medication.", "correct": "Medication was prescribed by the doctor."},
    { showCorrect: false,"sentences": "The librarian cataloged the books.", "correct": "The books were cataloged by the librarian."},
    { showCorrect: false,"sentences": "The director is shooting a movie.", "correct": "A movie is being shot by the director."},
    { showCorrect: false,"sentences": "The chef has prepared a gourmet meal.", "correct": "A gourmet meal has been prepared by the chef."},
    { showCorrect: false,"sentences": "The author wrote an interesting novel.", "correct": "An interesting novel was written by the author."},
    { showCorrect: false,"sentences": "The waiter served the food.", "correct": "The food was served by the waiter."}
  ]




}
