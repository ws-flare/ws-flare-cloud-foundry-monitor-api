import {Entity, model, property} from '@loopback/repository';
import * as uuid from 'uuid/v4';

/**
 * Defines the attributes of a usage model to be stored in the database
 */
@model()
export class Usage extends Entity {
    @property({
        type: 'string',
        id: true,
        default: () => uuid()
    })
    id?: string;

    @property({
        type: 'date',
        default: () => new Date(),
    })
    createdAt?: string;

    @property({
        type: 'string',
        required: true,
    })
    jobId: string;

    @property({
        type: 'string',
        required: true,
    })
    appId: string;

    @property({
        type: 'number',
        dataType: 'bigint',
        required: true,
    })
    mem: number;

    @property({
        type: 'number',
        dataType: "decimal",
        scale: 3,
        required: true,
    })
    cpu: number;

    @property({
        type: 'number',
        required: true,
    })
    disk: number;

    @property({
        type: 'number',
        dataType: 'bigint',
        required: true,
    })
    mem_quota: number;

    @property({
        type: 'number',
        dataType: 'bigint',
        required: true,
    })
    disk_quota: number;

    @property({
        type: 'number',
        required: true,
    })
    instance: number;

    @property({
        type: 'string',
        required: true,
    })
    time: string;

    @property({
        type: 'string',
        required: true,
    })
    state: string;

    @property({
        type: 'number',
        required: true,
    })
    uptime: number;

    @property({
        type: 'string',
        required: true,
    })
    name: string;


    constructor(data?: Partial<Usage>) {
        super(data);
    }
}
