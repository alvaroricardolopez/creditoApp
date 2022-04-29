import { getDato } from './../../../model/documentos.interface';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/componets/model/cliente.interface';
import { DocumentosService } from 'src/app/services/documentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  num_sol: number;
  id_cliente: number;
  cliente : FormGroup;
  getDatos : getDato;

  constructor(
    private documentosService:DocumentosService,
    private router:Router,
    private formBuilder : FormBuilder,
    private rout:ActivatedRoute) { }

  ngOnInit(): void {
    //this.num_sol = Number(this.rout.snapshot.paramMap.get('num_sol'));
    this.documentosService.getDatos().subscribe((response: getDato)=>{
      this.getDatos = response
      console.log(this.getDatos)
    })
  }

  getInfo(){
    this.id_cliente = Number(this.rout.snapshot.paramMap.get('id_cliente'));
    this.cliente = this.formBuilder.group({
      'nombre1_cliente': [null,Validators.required],
      'nombre2_cliente': [null,Validators.required],
      'apellido1_cliente': [null,Validators.required],
      'apellido2_cliente': [null,Validators.required],
      'cedula_cliente': [null,Validators.required],
      'ciudad_cliente': [null,Validators.required],
      'direccion_cliente': [null,Validators.required],
      'telefono_cliente': [null],
      'celular_cliente': [null,Validators.required],
      'email_cliente': [null,Validators.required],
      'estado_cliente': ['Nuevo',Validators.required],
    });

    this.documentosService.getCliente(this.id_cliente).pipe(first()).subscribe(data=>{
      this.f.nombre1_cliente.setValue(data.nombre1_cliente);
      this.f.nombre2_cliente.setValue(data.nombre2_cliente);
      this.f.apellido1_cliente.setValue(data.apellido1_cliente);
      this.f.apellido2_cliente.setValue(data.apellido2_cliente);
      this.f.cedula_cliente.setValue(data.cedula_cliente);
      this.f.ciudad_cliente.setValue(data.ciudad_cliente);
      this.f.direccion_cliente.setValue(data.direccion_cliente);
      this.f.telefono_cliente.setValue(data.telefono_cliente);
      this.f.celular_cliente.setValue(data.celular_cliente);
      this.f.email_cliente.setValue(data.email_cliente);

    });

  }

  get f() {return this.cliente.controls;}

}
