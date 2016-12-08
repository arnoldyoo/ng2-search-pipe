import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe'
})

export class Ng2SearchPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        let values = [];

        if ( args['term'] !== '') {    
            let term: string = args['term'].toLocaleLowerCase();
            values = value.filter(item => this.isContain(term,item, args['naming']))
            return values;
        } else {
            return value;
        }
    }

    isContain(term: string, item: any, naming: string): any{
        if ( item[naming].toLocaleLowerCase().indexOf(term) !== -1 ) {
            return item;
        }
    }
}
