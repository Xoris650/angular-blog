import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = 'NOVO HOMEM DE FERRO ANUNCIADO';
  contentDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie dapibus magna pharetra placerat. Morbi vitae augue at nunc tempus lobortis a vel purus. In nisl nisl, convallis congue nisi sollicitudin, egestas pretium ante. Praesent gravida nunc arcu, quis elementum erat sagittis et. Pellentesque lacus dolor, laoreet ornare est ultricies, elementum euismod sem. Vestibulum quis elit nec metus maximus tincidunt. Ut rutrum dolor quis orci mattis ornare. Nullam posuere magna et odio dictum, eu elementum arcu posuere. Duis hendrerit augue erat, sed lacinia ante rhoncus at. Ut luctus nibh tortor, ac convallis elit sodales sit amet. Nullam scelerisque enim ac est condimentum, ac dignissim augue bibendum. Donec aliquet finibus erat, quis efficitur nisl iaculis vitae. In posuere pulvinar elit vitae volutpat. Cras vitae tellus feugiat, blandit nibh consequat, porta magna. Aenean vel posuere mi, eu pharetra leo. Mauris quis condimentum tortor. Ut sagittis finibus tincidunt. Mauris in fermentum ligula. Fusce mattis lorem et mauris fringilla blandit. Etiam lacinia lobortis quam. Proin tellus tellus, posuere et facilisis non, commodo in eros. Quisque pulvinar volutpat mi vel condimentum. Nam velit mauris, tempus ac arcu in, finibus ultricies sem.Pellentesque ac enim pretium, viverra leo a, placerat tellus.Proin egestas odio lacus, sed cursus diam euismod id.Pellentesque aliquam diam in metus scelerisque efficitur.Vivamus pellentesque orci faucibus odio elementum feugiat.Duis et placerat mauris.Nulla egestas mauris in augue fringilla eleifend.Curabitur sit amet dictum velit.Sed eget pretium massa, vel feugiat dolor.Quisque sollicitudin rhoncus felis, ac vulputate odio eleifend sed.Quisque vitae mollis nibh.Aenean malesuada nibh est, in sollicitudin ante fringilla eget.Nunc venenatis augue justo, a imperdiet felis pretium sit amet.Aenean vel mauris id odio pulvinar bibendum in nec ligula.Phasellus ut felis dolor.Nunc sit amet velit ex.Pellentesque mollis nulla eu sem cursus, nec rhoncus quam tempus.Nullam feugiat fringilla mi sed ultrices.Nullam porttitor efficitur gravida.Aliquam erat volutpat.Nulla vel aliquam diam.Fusce ornare diam vel nulla viverra, sit amet tempor libero suscipit.Morbi venenatis vel turpis a maximus.Duis quis enim arcu.Sed a magna metus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nulla ornare accumsan malesuada.Nunc ut vulputate augue."
  private id:string | null = "0"
  constructor(private route:ActivatedRoute) {
}

ngOnInit(): void {
  this.route.paramMap.subscribe(value =>
    this.id = value.get("id")
  )
  this.setValuestoComponent(this.id)
}

setValuestoComponent(id:string | null){
  const result = dataFake.filter(article => article.id == id)[0]
  this.contentTitle = result.title;
  this.photoCover = result.photoCover;
  this.contentDescription = result.description
}
}
