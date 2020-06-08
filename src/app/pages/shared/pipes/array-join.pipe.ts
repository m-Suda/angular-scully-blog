import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayJoin',
})
export class ArrayJoinPipe implements PipeTransform {
    transform(value: any[], joinString: string): string {
        if (!Array.isArray(value)) {
            return value;
        }
        return value.join(joinString);
    }
}
